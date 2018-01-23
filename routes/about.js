var express = require('express');
var router = express.Router();

var date = new Date();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Takunda Mudarikwa | About', year: date.getFullYear()});
});

module.exports = router;
