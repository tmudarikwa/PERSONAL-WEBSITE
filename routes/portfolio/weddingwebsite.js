const express = require('express');
const router = express.Router();

const date = new Date();
// portfolio data
const portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  const path = '/portfolio/weddingwebsite';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - Wedding Website', year: date.getFullYear(), portfolio: portfolio.getPortfolio(), pageTitle:'PORTFOLIO - WEDDING WEBSITE'});
});

module.exports = router;