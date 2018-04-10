var express = require('express');
var router = express.Router();

var date = new Date();
/* GET about page. */
router.get('/', function(req, res, next) {
  var path = '/about';
  res.locals.path = path;
  res.render('about', { title: 'Takunda Mudarikwa - Full-stack Web Developer | About', year: date.getFullYear()});
});

module.exports = router;
