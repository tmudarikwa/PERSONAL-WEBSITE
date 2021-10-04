var express = require('express');
var router = express.Router();

var date = new Date();
// portfolio data
var portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/mumoafruika';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/mumoafruika', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika', year: date.getFullYear(), portfolio: portfolio.getPortfolio()});
});

module.exports = router;
