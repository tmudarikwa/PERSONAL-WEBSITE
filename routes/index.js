var express = require('express');
var router = express.Router();

var portfolio = require('../config/portfolio');

var date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  var path = '/';
  res.locals.path = path;
  res.locals.year = date.getFullYear();
  res.render('index', { title: 'Takunda Mudarikwa - Full-stack Web Developer | HOME', year: date.getFullYear() , portfolio: portfolio.getPortfolio()});
});

module.exports = router;
