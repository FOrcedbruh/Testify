const Test = require("./../models/Test")
const User = require("./../models/User")

class testsController {
    async addTest(req, res) {
        const { question, answers, correctAnswer } = req.body;

        const test = new Test({
            question,
            answers,
            correctAnswer
        })

        await test.save()

        res.json(test)
    }
    async getTests(req, res) {
        const tests = await Test.find()

        return res.json(tests)
    }
    async updateResult(req, res) {
        try {
            const { userId, result } = req.body;

            const user = await User.findByIdAndUpdate(userId, { result: result })

            await user.save()


            return res.json({
                login: user.login,
                _id: user._id,
                result: user.result
            })
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = new testsController()