const multer = require("multer");
const path = require("path");


let storage = multer.diskStorage({

    destination: function (request, file, callBack) {
        callBack(null, "uploads/")
    },


    filename: function (request, file, callBack) {
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)
}`;

        callBack(null, fileName);
    }

});

let upload = multer({
    storage,
    limit: {
        fileSize: 1000000 * 100
    }
});

module.exports = upload;