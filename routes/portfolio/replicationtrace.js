const express = require('express');
const router = express.Router();

const date = new Date();
// portfolio data
const portfolio = require('../../config/portfolio');
/* GET portifolio page. */
router.get('/', function(req, res, next) {
  const path = '/portfolio/expense-allocation-metrics';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - Replication Trace', year: date.getFullYear(), portfolio: portfolio.getPortfolio(), pageTitle:'PORTFOLIO - REPLICATION TRACE'});
});

module.exports = router;
