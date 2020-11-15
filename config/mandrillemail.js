/*
var mandrill = require('mandrill-api/mandrill');

var mandrill_client = new mandrill.Mandrill('lQi6Z4MbRPDIZ7P8M2qAxg');
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'tkmud91@gmail.com',//change this before going to production
		pass:'qvpxosbpjnsdlkte' // change this line before goin to production
	}
});

var sendcontactemail = function(req, res){

    var data = req.body;
    var message = {
                  html: "<p>"+data.message+"</p> CONTACT EMAIL: "+data.email,
                  subject: "TAKUNDA MUDARIKWA PERSONAL WEBSITE NEW MESSAGE",
                  from_email: "tkmud91@gmail.com",
                  from_name: ""+data.email+"",
                  to:"tkmud91@hotmail.com",
              };
      //var send_at = "example send_at";
      transporter.sendMail(message, function(error,result) {
		  if(error){
			var emailsent = "We apologize there has been an error trying to submit your information.";
			res.send(emailsent);
			return;
		  }else{
			var emailsent = "Email sent! I will get intouch with you asap. Thank you!";
			res.send(emailsent);
			return;
		  }
      });
};
module.exports.sendContactEmail = sendcontactemail;
