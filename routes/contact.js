var express = require('express');
var router = express.Router();

var date = new Date();

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Takunda Mudarikwa | Contact', year: date.getFullYear()});
});

module.exports = router;
