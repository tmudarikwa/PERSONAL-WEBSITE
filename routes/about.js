var express = require('express');
var router = express.Router();

var date = new Date();
console.log("---router called---");
/* GET home page. */
router.get('/', function(req, res, next) {
  var path = '/about';
  res.locals.path = path;
  res.render('about', { title: 'Takunda Mudarikwa | About', year: date.getFullYear()});
});

module.exports = router;
