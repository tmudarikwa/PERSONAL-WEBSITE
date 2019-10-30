var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/mumoafruika';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = '/portfolio/';
  res.render('portfolio/mumoafruika', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika', year: date.getFullYear()});
});

module.exports = router;
