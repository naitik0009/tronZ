const express = require("express");
const fileRoute = express.Router();
const multerMidleware = require("../middlewares/multer.middleware");
const fileHandling = require("../controllers/file.controller");
fileRoute.route("/uploadFile").post(multerMidleware.single("file"),fileHandling);
module.exports = fileRoute;
