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
	var htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
							"<header style='display: block;padding: 2rem;'>\n"+
								"<img src=https://pixykorner.co.za/redwaste/images/global/redwaste_logo.png class='logo-dark' alt='Logo'>\n"+
							"</header>\n"+
							"<div style='color:white !important;font-family:'Signika', sans-serif !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Full Name:</label>\n"+
									"<a  style='width:100%'>"+data.name+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Email Address:</label>\n"+
									"<a style='width:100%'>"+data.email+"</a>\n"+
								"</div>\n"+
								"<div style='width:100%;'>\n"+
									" <label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Message:</label>\n"+
									"<textarea style='width:80%'>"+data.message+"</textarea>\n"+
								"</div>\n"+
							"</div>\n"+
						"</div>";

    var message = {
                  html: htmlTemplate,
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
	var htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
							"<header style='display: block;padding: 2rem;'>\n"+
								"<img src=https://pixykorner.co.za/redwaste/images/global/redwaste_logo.png class='logo-dark' alt='Logo'>\n"+
							"</header>\n"+
							"<div style='color:white !important;font-family:'Signika', sans-serif !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Full Name:</label>\n"+
									"<a  style='width:100%'>"+data.name+"</a>\n"+
								"</div>\n"+
								"<div style='color:white !important;font-family:'Signika', sans-serif !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Company Name:</label>\n"+
									"<a  style='width:100%'>"+data.companyname+"</a>\n"+
								"</div>\n"+
								"<div style='color:white !important;font-family:'Signika', sans-serif !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go :</label>\n"+
									"<a  style='width:100%'>"+data.productgo+"</a>\n"+
								"</div>\n"+
								"<div style='color:white !important;font-family:'Signika', sans-serif !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go-Plus:</label>\n"+
									"<a  style='width:100%'>"+data.productplus+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Email Address:</label>\n"+
									"<a style='width:100%'>"+data.email+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Shipping Address:</label>\n"+
									"<a style='width:100%'>"+data.shipping+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : Household :</label>\n"+
									"<a style='width:100%'>"+data.producthousehold+"</a>\n"+
								"</div>\n"+
								"<div style='width:100%;'>\n"+
									" <label  style='width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Message:</label>\n"+
									"<textarea style='width:80%'>"+data.message+"</textarea>\n"+
								"</div>\n"+
							"</div>\n"+
						"</div>";

    var message = {
                  html:htmlTemplate,
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
