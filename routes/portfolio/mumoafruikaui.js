const express = require('express');
const router = express.Router();

const date = new Date();
// portfolio data
const portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  const path = '/portfolio/mumoafruika-platform-ui';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - MuMoAfruika Plaform UI', year: date.getFullYear(), portfolio: portfolio.getPortfolio(),pageTitle:'PORTFOLIO - MuMoAfruika Platform UI'});
});

module.exports = router;
