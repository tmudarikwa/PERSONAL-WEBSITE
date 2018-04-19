var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio';
  console.log(req.params);
  res.locals.path = path;
  res.render('portfolio', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio', year: date.getFullYear()});
});

module.exports = router;
