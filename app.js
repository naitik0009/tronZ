const express = require("express");

const app = express();
const fileRoute = require("./routes/file.route");
const downloadRoute = require("./routes/fileDownload.route");
const mailRoute = require("./routes/mail.route");
// app.use(express.static(__dirname+"/views"));
app.use(express.json());
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/test",fileRoute);
app.use("/api/v1/download",downloadRoute);
app.use("/api/v1/download",downloadRoute);
app.use("/api/v1/tronz",mailRoute);

module.exports = {app};
