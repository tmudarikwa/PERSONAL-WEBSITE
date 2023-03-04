const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const viewresume = require('./routes/viewresume');
const sendemail = require('./config/nodemailer');
const sendRedwasteEmail = require('./config/mailchimp');
const frewprocess = require('./routes/portfolio/frewprocess');
const gasco = require('./routes/portfolio/gasco');
const mumoafruika = require('./routes/portfolio/mumoafruika');
const mumoafruikaui = require('./routes/portfolio/mumoafruikaui');
const gerf = require('./routes/portfolio/gerfusa');
const expenseallocation = require('./routes/portfolio/expenseallocation');
const chillybarrels = require('./routes/portfolio/chillybarrels');
const chillybarrelsportal = require('./routes/portfolio/chillybarrels-portal');
const chillybarrelswoocommerce = require('./routes/portfolio/chillybarrels-woocommerce');
const potencity = require('./routes/portfolio/potencity');
const adbdeliveryservices = require('./routes/portfolio/adbdeliveryservices');
const replicationtrace = require('./routes/portfolio/replicationtrace');
const round = require('./routes/misc/round');
const editround = require('./routes/misc/editround');
const saveRoundTable = require('./config/editedRoundTable');
const upload = require('./routes/misc/editround');
const uploadFile= require('./config/uploadFile');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: ['https://redwaste.africa','https://www.redwaste.africa','http://www.redwaste.africa','http://redwaste.africa']
}));

app.use('/', index);
app.use('/TAKUNDAEUGENEMUDARIKWA-RESUME', viewresume);
app.post('/sendemail', function(req,res){
   sendemail.sendContactEmail(req,res);
});
app.post('/sendemailRedWaste', function(req,res){
  sendRedwasteEmail.sendContactEmailRedWaste(req,res);
});
app.post('/sendemailOrderRedWaste', function(req,res){
  sendRedwasteEmail.sendOrderEmailRedWaste(req,res);
});
app.use('/portfolio/fpg',frewprocess);
app.use('/portfolio/gasco',gasco);
app.use('/portfolio/mumoafruika-landing',mumoafruika);
app.use('/portfolio/mumoafruika-platform',mumoafruikaui);
app.use('/portfolio/gerfusa',gerf);
app.use('/portfolio/expense', expenseallocation);
app.use('/portfolio/potencity', potencity);
app.use('/portfolio/chillybarrels', chillybarrels);
app.use('/portfolio/chillybarrels-portal', chillybarrelsportal);
app.use('/portfolio/chillybarrels-woocommerce', chillybarrelswoocommerce);
app.use('/portfolio/adbdeliveryservices', adbdeliveryservices);
app.use('/portfolio/replicationtrace', replicationtrace);
//misc routes
app.use('/misc/round', round);
app.use('/misc/editround', editround);
app.use('/misc/upload', upload);
app.post('/misc/postedittedround', function(req,res){
  console.log('post misc')
  saveRoundTable.saveEdits(req,res);
  res.redirect('/misc/round');
})
app.post('/misc/uploadfile', function(req,res){
  console.log('post file')
  uploadFile.saveUpload(req,res);
  res.write("Thank you for sending me the file Mr. Wilson");
  res.end();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //console error logging
  console.log('***** page access error *****');
  console.log(err);
  res.render('error');
});

module.exports = app;
