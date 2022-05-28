const express = require("express");
const mailRoute = express.Router();
const {sendMail} = require("../controllers/mail.controller");

mailRoute.route("/send").post(sendMail);

module.exports = mailRoute;