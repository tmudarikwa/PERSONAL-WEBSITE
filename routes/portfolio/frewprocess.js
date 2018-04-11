var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/frewprocess';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = path;
  res.render('portfolio/frewprocess', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - Frewprocess Portal', year: date.getFullYear()});
});

module.exports = router;
