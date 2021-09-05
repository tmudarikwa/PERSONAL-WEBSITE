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
							"<div style='color:white !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Full Name:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.name+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Email Address:</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.email+"</a>\n"+
								"</div>\n"+
								"<div style='width:100%;'>\n"+
									" <label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Message:</label>\n"+
									"<p style='width:80%;border=solid 1px grey;border-radius=5px;color: #fff'>"+data.message+"</p>\n"+
								"</div>\n"+
							"</div>\n"+
						"</div>";

    var message = {
                  html: htmlTemplate,
                  subject: "REDWASTE EMAIL",
                  from_email: data.email,
                  from_name: "RedWaste",
                  to:"nymud94@gmail.com",//"info@redwaste.africa",
              };
      //var send_at = "example send_at";
      transporter.sendMail(message, function(error,result) {
		  if(error){
			var emailsent = "We apologize there has been an error trying to submit your information.";
			res.send(emailsent);
			return;
		  }else{
			var emailsent = "Email sent! We will get intouch with you asap. Thank you!";
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
							"<div style='color:white !important;background:#ee4644;padding: 2rem;'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Full Name:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.name+"</a>\n"+
								"</div>\n"+
								"<div >\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Company Name:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.companyname+"</a>\n"+
								"</div>\n"+
								"<div >\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go :</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.productgo+"</a>\n"+
								"</div>\n"+
								"<div >\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go-Plus:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.productplus+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Email Address:</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.email+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Shipping Address:</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.shipping+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : Household :</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.producthousehold+"</a>\n"+
								"</div>\n"+
								"<div style='width:100%;'>\n"+
									" <label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Message:</label>\n"+
									"<p style='width:80%;border=solid 1px grey;border-radius=5px;;color: #fff'>"+data.message+"</p>\n"+
								"</div>\n"+
							"</div>\n"+
						"</div>";

    var message = {
                  html:htmlTemplate,
                  subject: "REDWASTE Order Email",
                  from_email: data.email,
                  from_name: "RedWaste",
                  to:"nymud94@gmail.com",//"info@redwaste.africa",
              };
      //var send_at = "example send_at";
      transporter.sendMail(message, function(error,result) {
		  if(error){
			var emailsent = "We apologize there has been an error trying to submit your information.";
			res.send(emailsent);
			return;
		  }else{
			var emailsent = "Order has been sent! We will get intouch with you asap. Thank you!";
			res.send(emailsent);
			return;
		  }
      });
	  //send confirmation email 
	  sendConfirmationEmailRedWaste(req,res);
};

let sendConfirmationEmailRedWaste =  function(req, res){

    var data = req.body;
	var htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
							"<header style='display: block;padding: 2rem;'>\n"+
								"<img src=https://pixykorner.co.za/redwaste/images/global/redwaste_logo.png class='logo-dark' alt='Logo'>\n"+
							"</header>\n"+
							"<div style='width:100;color:white !important;background:#ee4644;padding: 2rem;margin-bottom:2rem'>\n"+
							"<p> This is an email to confirm that your order has been recieved. Thank you for using our services.</p>\n"+
							"</div>\n"+
							"<div style='color:white !important;background:#ee4644;padding: 2rem;margin-bottom:2rem'>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Full Name:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.name+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Company Name:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.companyname+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go :</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.productgo+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:left;margin-bottom:4rem'>\n"+
									"<label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : On-The-Go-Plus:</label>\n"+
									"<a  style='width:100%;color: #fff'>"+data.productplus+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Email Address:</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.email+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Shipping Address:</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.shipping+"</a>\n"+
								"</div>\n"+
								"<div style='width:50%;float:right;margin-bottom:4rem'>\n"+
									"<label style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Red Waste : Household :</label>\n"+
									"<a style='width:100%;color: #fff'>"+data.producthousehold+"</a>\n"+
								"</div>\n"+
								"<div style='width:100%;'>\n"+
									" <label  style='color: #fff;width:100%;display: block;text-decoration: underline;font-size: 13px;margin-bottom:2rem;font-weight:bold'>Message:</label>\n"+
									"<p style='width:80%;border=solid 1px grey;border-radius=5px;;color: #fff'>"+data.message+"</p>\n"+
								"</div>\n"+
							"</div>\n"+
						"</div>\n"+
						"<div style='width:100;font-weight:bold;color:black !important;background:white;margin-top:4rem'>\n"+
							"<p style='float:left'><br/><br/>Regards,<br/><br/> RedWaste Team </p>\n"+
						"</div>\n";

    var message = {
                  html: htmlTemplate,
                  subject: "ORDER CONFIRMATION EMAIL",
                  from_email: "info@redwaste.africa" ,
                  from_name: "RedWaste",
                  to:data.email,
              };
      //var send_at = "example send_at";
      transporter.sendMail(message, function(error,result) {
		  if(error){
			var emailsent = "We apologize there has been an error trying to submit your information.";
			console.log(emailsent);
			return;
		  }else{
			var emailsent = "Confirmation Email sent! We will get intouch with you asap. Thank you!";
			console.log(emailsent);
			return;
		  }
      });
};

module.exports.sendContactEmail = sendcontactemail;
module.exports.sendContactEmailRedWaste = sendContactEmailRedWaste;
module.exports.sendOrderEmailRedWaste = sendOrderEmailRedWaste;
