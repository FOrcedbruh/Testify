const express = require("express")
const testsController = require("./tetsController")

const testsRouter = express.Router()


testsRouter.post("/add", testsController.addTest)
testsRouter.get("/get", testsController.getTests)

module.exports = testsRouter;