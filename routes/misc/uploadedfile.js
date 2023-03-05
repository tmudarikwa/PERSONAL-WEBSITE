const express = require('express');
const router = express.Router();

const date = new Date();

router.get('/', function(req, res, next) {
  const path = '/misc/fileuploaded';
  res.locals.path = '/misc/';
  res.locals.year = date.getFullYear();
  res.render('misc/uploadedfile', { title: 'Misc | File Uploaded', year: date.getFullYear()});
});

module.exports = router;