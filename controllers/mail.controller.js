const model = require("../models/file.schema");
const send  =  require("../apis/mail");
const template = require("../services/emailTemplate");
const  sendMail = async function(request,response){
    const {uuid,emailTo,emailFrom} = request.body;
    if(!uuid || !emailTo || !emailFrom){
        return response.status(422).json({error:"All fields are require"});
    }
    const data=await model.findOne({
        uuid:uuid,
    }) ;
    if(data.sender){
        return response.status(422).json({error:"email already sent"});
    }
    data.sender = emailFrom;
    data.receiver = emailTo;
    const save = await data.save();

    // now let's send the email:::::
    send(
        {
            from:emailFrom,
            to:emailTo,
            subject:"TronZ File Sharing Portal",
            text:`${emailFrom} sent you some files`,
            html:template({
                emailFrom:emailFrom,
                downloadLink:`${process.env.APP_BASE_URL}/api/v1/download/link/${data.uuid}`,
                size:parseInt(data.size)+" kb",
                expires:"24 hours"
            }),
        }
    );
    if(send){
        return response.send({success:true});
    }
};

module.exports = {sendMail};