var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/mumoafruika-platform-ui';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = '/portfolio/';
  res.render('portfolio/mumoafruikaui', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika Plaform UI', year: date.getFullYear()});
});

module.exports = router;
