const express = require('express');
const router = express.Router();

const date = new Date();
// portfolio data
const portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  const path = '/portfolio/mumoafruika';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika', year: date.getFullYear(), portfolio: portfolio.getPortfolio(), pageTitle:'PORTFOLIO - MuMoAfruika'});
});

module.exports = router;
