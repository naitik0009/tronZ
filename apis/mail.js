const mail = require("nodemailer");

const send = async function({from,to,subject,text,html}){
 console.log("sendig mail......."); 
 var sent = mail.createTransport({
     host:process.env.SMTP_HOST,
     port:process.env.SMTP_PORT,
     secure:false,
     auth:{
         user:process.env.MAIL_USER,
         pass:process.env.MAIL_PASS,
     }

 });  
 
 var ok = await sent.sendMail({
     from:from,
     to:to,
     subject:subject,
     text:text,
     html:html,
 });
 if(ok){
     console.log("mail sent success");
 }
}

module.exports = send;










