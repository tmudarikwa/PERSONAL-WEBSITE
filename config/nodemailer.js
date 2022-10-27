const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
const cred = require('dotenv').config()

const transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:cred.parsed.GMAIL_USER,
		pass:cred.parsed.GMAIL_PASS
	}
});

let sendcontactemail = (req,res) =>{

    const data = req.body;
    const message = {
                  html: "<p>"+data.message+"</p> CONTACT EMAIL: "+data.email,
                  subject: "TAKUNDA MUDARIKWA PERSONAL WEBSITE NEW MESSAGE",
                  from_email: "tkmud91@gmail.com",
                  from_name: ""+data.email+"",
                  to:"tkmud91@hotmail.com",
              };

      transporter.sendMail(message, function(error,result) {
		  if(error){
			const emailsent = "We apologize there has been an error trying to submit your information.";
			res.send(emailsent);
			return;
		  }else{
			const emailsent = "Email sent! I will get intouch with you asap. Thank you!";
			res.send(emailsent);
			return;
		  }
      });
};

module.exports.sendContactEmail = sendcontactemail;