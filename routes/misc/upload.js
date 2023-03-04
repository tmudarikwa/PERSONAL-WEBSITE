const express = require('express');
const router = express.Router();

const date = new Date();

router.get('/', function(req, res, next) {
  const path = '/misc/upload';
  res.locals.path = '/misc/';
  res.locals.year = date.getFullYear();
  res.render('misc/upload', { title: 'Misc | File Upload', year: date.getFullYear()});
});

module.exports = router;