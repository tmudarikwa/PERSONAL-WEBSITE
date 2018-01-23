var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var date = new Date();
/* download resume copy */
router.get('/', function(req, res, next) {
  var vpath = '/viewresume';
  res.locals.path = vpath;	
  var file = path.join(__dirname, '../public/resume/TAKUNDA EUGENE MUDARIKWA.pdf');
  
  fs.readFile(file, function(err,data){
    res.contentType("application/pdf");
    res.send(data);
  }); 
});



module.exports = router;