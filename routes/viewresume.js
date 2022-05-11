const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const date = new Date();
/* download resume copy */
router.get('/', function(req, res, next) {
  const vpath = '/TAKUNDAEUGENEMUDARIKWA-RESUME';
  res.locals.path = vpath;
  const file = path.join(__dirname, '../public/resume/TAKUNDA EUGENE MUDARIKWA -.pdf');

  fs.readFile(file, function(err,data){
    res.contentType("application/pdf");
    res.send(data);
  });
});

module.exports = router;
