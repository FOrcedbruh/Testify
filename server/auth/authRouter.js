const express = require('express');
const authRouter = express.Router();
const authController = require("./authController")





authRouter.post('/registration', authController.registartion);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);

module.exports = authRouter