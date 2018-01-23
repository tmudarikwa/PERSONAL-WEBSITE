var express = require('express');
var router = express.Router();
var path = require('path');

var date = new Date();
/* download resume copy */
router.get('/', function(req, res, next) {
  var vpath = '/downloadresume';
  res.locals.path = vpath;	
   var file = path.join(__dirname, '../public/resume/TAKUNDA EUGENE MUDARIKWA.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
  // res.render('index', { title: 'Takunda Mudarikwa | Portifolio', year: date.getFullYear(), filedownload: 'success'});
});



module.exports = router;