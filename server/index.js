const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const authRouter = require("./auth/authRouter")
const testsRouter = require("./tests/testsRouter")

dotenv.config()



const app = express()
const PORT = 3000 && process.env.PORT


app.use(cors({
    credentials: true
}))


app.use(express.urlencoded({limit: "50mb"}))
app.use(express.json({limit: '50mb'}))
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/tests', testsRouter)

app.get("/", (req, res) => {
    res.json({
        message: "Wlcome to testify app"
    })
})

const db_url = process.env.DB_URL

const start = async () => {
    try {
        mongoose.connect(db_url).then(() => {
            console.log("connected to db")
        })
        app.listen(PORT, () => {
            console.log(`server has been started on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()