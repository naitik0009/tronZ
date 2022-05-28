const express = require("express");
const downloadRoute = express.Router();
const {download,show} = require("../controllers/fileDownload.controller");

downloadRoute.route("/:uuid").get(show);

downloadRoute.route("/link/:uuid").get(download);


module.exports = downloadRoute;