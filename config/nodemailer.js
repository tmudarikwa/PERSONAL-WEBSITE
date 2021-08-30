const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');

const transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'takundamudarikwawebservices@gmail.com',//change this before going to production
		pass:'uapcltghuabthuqn' // change this line before goin to production
	}
});

let sendcontactemail = function(req, res){

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

let sendContactEmailRedWaste =  function(req, res){

    var data = req.body;
    var message = {
                  html: "<h4> Contact NAME: "+data.name+"</h4><br/>CONTACT EMAIL: "+data.email+"<p><br/><br/>"+data.message+"</p>",
                  subject: "REDWASTE EMAIL",
                  from_email: data.email,
                  from_name: ""+data.email+"",
                  to:"nymud94@gmail.com",//"info@redwaste.africa",
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

let sendOrderEmailRedWaste =  function(req, res){

    var data = req.body;
    var message = {
                  html: "<h4> Contact Name: "+data.name+"</h4><br/>CONTACT Email: "+data.email+"<p><br/><br/>"+data.message+"</p>",
                  subject: "REDWASTE Order Email",
                  from_email: data.email,
                  from_name: ""+data.email+"",
                  to:"nymud94@gmail.com",//"info@redwaste.africa",
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
module.exports.sendContactEmailRedWaste = sendContactEmailRedWaste;
module.exports.sendOrderEmailRedWaste = sendOrderEmailRedWaste;
