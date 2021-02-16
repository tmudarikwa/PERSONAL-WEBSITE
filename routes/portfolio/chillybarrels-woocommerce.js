var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/chillybarrels-woocommerce';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/chillybarrels-woocommerce', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - ChillyBarrels', year: date.getFullYear()});
});

module.exports = router;