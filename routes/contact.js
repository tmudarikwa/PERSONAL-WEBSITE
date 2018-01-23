var express = require('express');
var router = express.Router();

var date = new Date();

/* GET contact page. */
router.get('/', function(req, res, next) {
  var path = '/contact';
  res.locals.path = path;
  res.render('contact', { title: 'Takunda Mudarikwa | Contact', year: date.getFullYear()});
});

module.exports = router;
