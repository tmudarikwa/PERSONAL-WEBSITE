const express = require('express');
const router = express.Router();

const date = new Date();

const roundTable = require('../../config/roundTable');

router.get('/', function(req, res, next) {
  const path = '/misc/round';
  res.locals.path = '/misc/';
  res.locals.year = date.getFullYear();
  res.render('misc/editround', { title: 'Misc | Edit Rhaundi', year: date.getFullYear(), roundTableDetails : roundTable.getDetails()});
});

module.exports = router;