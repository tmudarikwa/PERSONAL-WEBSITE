const express = require('express');
const router = express.Router();

const date = new Date();
// portfolio data
const portfolio = require('../../config/portfolio');

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  const path = '/portfolio/chillybarrels-woocommerce';
  res.locals.path = '/portfolio/';
  res.locals.year = date.getFullYear();
  res.render('portfolio/projects', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - ChillyBarrels', year: date.getFullYear(), portfolio: portfolio.getPortfolio(), pageTitle:'PORTFOLIO - ChillyBarrels (WooCommerce)'});
});

module.exports = router;