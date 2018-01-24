var express = require('express');
var router = express.Router();

var date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  var path = '/';
  res.locals.path = path;
  res.render('index', { title: 'Takunda Mudarikwa | HOME', year: date.getFullYear()});
});

module.exports = router;
