var express = require('express');
var router = express.Router();

var date = new Date();
// portfolio data
var portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/mumoafruika-platform-ui';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika Plaform UI', year: date.getFullYear(), portfolio: portfolio.getPortfolio(),pageTitle:'PORTFOLIO - MuMoAfruika Platform UI'});
});

module.exports = router;
