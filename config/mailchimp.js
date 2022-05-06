const mailchimpClient = require('@mailchimp/mailchimp_transactional')("2x0ddDMW9H9p-WQjZUlBIw");

let sendContactEmailRedWaste =  (req, res) =>{
    const data = req.body;
    const htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
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

    let emailMessage = {
                    html: htmlTemplate,
                    subject: "REDWASTE EMAIL",
                    from_email: "info@redwaste.africa",
                    from_name: "RedWaste",
                    to:[
                        {
                            email: "sales@redwaste.africa",
                            name: "Sales Redwaste"
                        }
                    ]
                };

    const runSendContact = async () => {
    const response = await mailchimpClient.messages.send( {message: emailMessage});
    console.log(response);
    if(response[0].status == 'error' || response[0].status == 'rejected'){
        const emailsent = "We apologize there has been an error trying to submit your information.";
        res.send(emailsent);
        return;  
    }else{
        const emailsent = "Order has been sent! We will get intouch with you asap. Thank you!";
        res.send(emailsent);
        return;
        }
    };

    runSendContact();
};

let sendOrderEmailRedWaste =  (req, res) => {

    const data = req.body;
    const  htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
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

    let emailMessage = {
                    html:htmlTemplate,
                    subject: "REDWASTE Order Email",
                    from_email: "info@redwaste.africa",
                    from_name: "RedWaste",
                    to:[
                        {
                            email: "sales@redwaste.africa",
                            name: "Sales Redwaste"
                        }
                    ]
                };

    const runSendOrder = async () => {
    const response = await mailchimpClient.messages.send( {message : emailMessage});
    console.log(response);
    if(response[0].status == 'error' || response[0].status == 'rejected'){
        const emailsent = "We apologize there has been an error trying to submit your information.";
        res.send(emailsent);
        return;  
    }else{
        const emailsent = "Order has been sent! We will get intouch with you asap. Thank you!";
        res.send(emailsent);
        return;
        }
    };
    runSendOrder();
    //send confirmation email 
    sendConfirmationEmailRedWaste(req,res);
};

let sendConfirmationEmailRedWaste =  (req, res) =>{

    const data = req.body;
    const htmlTemplate = "<div style='display: block;padding: 4rem;'>\n"+
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
                        "<div style='width:100;font-weight:bold;color:black !important;background:white;margin-top:2rem'>\n"+
                            "<p style='float:left'>Regards,<br/><br/> RedWaste Team </p>\n"+
                        "</div>\n";

    const emailMessage = {
                    html: htmlTemplate,
                    subject: "ORDER CONFIRMATION EMAIL",
                    from_email: "sales@redwaste.africa" ,
                    from_name: "RedWaste",
                    to:[
                        {
                            email: data.email,
                            name: data.name
                        }
                    ]
                };

    const runSendConfirmation = async () => {
    const response = await mailchimpClient.messages.send({message:emailMessage});
    if(response[0].status == 'error' || response[0].status == 'rejected'){
        console.log("**** error sending confirmation email to customer ****");
        console.log(response);
    }else{
        console.log("** confirmation email to customer sent successfully **")
        console.log(response);
    }
    };
    
    runSendConfirmation();
};

module.exports.sendContactEmailRedWaste = sendContactEmailRedWaste;
module.exports.sendOrderEmailRedWaste = sendOrderEmailRedWaste;