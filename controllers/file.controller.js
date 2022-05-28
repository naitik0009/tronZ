const fileModel = require("../models/file.schema");
const {v4: uuid4} = require("uuid");
const fileHandling = async function (request, response) { // console.log(request);
    try { // console.log(request.body);


        const create = await fileModel.create({filename: request.file.filename, uuid: uuid4(), path: request.file.path, size: request.file.size});

        if (create) {
            return response.status(200).json({file: `${
                    process.env.APP_BASE_URL
                }/api/v1/download/${
                    create.uuid
                }`});
        }


    } catch (error) {
        return response.json(error);
    }

};

module.exports = fileHandling;
