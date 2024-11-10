const User = require("./../models/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');





const generate_jwt = (userId, res) => {
    const payload = {
        userId
    }

    const secret = process.env.JWT_SECRET

    const token = jwt.sign(payload, secret, { expiresIn: '14d'});

    return res.cookie('jwt', 
        token,
        {
                maxAge: 15 * 24 * 60 * 60 * 1000,
                httpOnly:true,
                sameSite: 'strict',
                secure: false
        }
    )
}


class authController {
    async registartion(req, res) {
        try {
            const { login, password } = req.body;

            const candidate = await User.findOne({login});
    
            if (candidate) {
                return res.status(400).json({
                    message: `Пользователь ${login} уже существует`
                })
            }
    
            const hashPassword = bcrypt.hashSync(password, 7);
    
    
            const user = new User({
                login,
                password: hashPassword
            });
    
            await user.save();
    
            await generate_jwt(user._id, res)
    
            return res.status(200).json({
                _id: user._id,
                login: login
            });
        } catch (error) {   
            console.log(error);
            return res.status(400).json({
                message: 'Server error'
            })
        }
    }
    async login(req, res) {
        try {
            const { login, password } = req.body;

            const user = await User.findOne({login});

            if (!user) {
                return res.status(400).json({
                    message: `Пользователь ${login} не существует`
                })
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({
                    message: `Введены неверные данные`
                })
            }

            await generate_jwt(user._id, res);

            return res.status(200).json({
                _id: user._id,
                login: login
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: 'Server error'
            })
        }
    }
    async logout(req, res) {
        res.cookie('jwt', '', {
            maxAge: 0
        });
        return res.status(200).json({
            message: 'You logout ))'
        })
    }
}

module.exports = new authController()