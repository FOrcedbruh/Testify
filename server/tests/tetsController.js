const Test = require("./../models/Test")


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
}


module.exports = new testsController()