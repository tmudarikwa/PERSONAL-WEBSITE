const express = require('express');
const router = express.Router();

const portfolio = require('../config/portfolio');

const date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  const path = '/';
  res.locals.path = path;
  res.locals.year = date.getFullYear();
  res.render('index', { title: 'Takunda Mudarikwa - Full-stack Web Developer | HOME', year: date.getFullYear() , portfolio: portfolio.getPortfolio()});
});

module.exports = router;
