var express = require('express');
var router = express.Router();

var date = new Date();
console.log("---router called---");
/* GET home page. */
router.get('/about', function(req, res, next) {
  console.log('---path matched---');
  res.render('about', { title: 'Takunda Mudarikwa | About', year: date.getFullYear()});
});

module.exports = router;
