var express = require('express');
var router = express.Router();
var sendcontactemail = require('../config/mandrillemail');

// =====================================
// EMAIL SENT FROM THE CONTACT US PAGE==
// =====================================
router.post('/', function(req,res){
    sendcontactemail.sendContactEmail(req,res);
});

module.exports = router;
