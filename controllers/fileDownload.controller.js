const fileModel = require("../models/file.schema");

const {paths} = require("../path");

const show = async (request,response)=>{
    const uuid = request.params.uuid;
    console.log(uuid);
    try {
        const data = await fileModel.findOne({uuid:uuid});
        console.log(data);
        if(!data){
            return response.render("download",{error:"Link Has been expired"});
        }
        return response.render("download",{
            uuid:data.uuid,
            filename:data.filename,
            fileSize:data.size,
            download:`${process.env.APP_BASE_URL}api/v1/download/link/${data.uuid}`
        })
    } catch (error) {
        return response.render("download",{error:"Something Went Wrong"});
    }
};


const download = async(request,response)=>{
    const uuid = request.params.uuid;
    console.log(uuid);
    try {
        const data = await fileModel.findOne({uuid:uuid});
        console.log(data);
        if(!data){
            return response.render("download",{error:"Link Has been expired"});
        }
        const filePath = `${paths}/${data.path}`;
        console.log(filePath);
        return response.download(filePath);
    } catch (error) {
        return response.render("download",{error:"Something Went Wrong"});
    }
}
module.exports = {download,show};