var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var contactme = require('./routes/contact');
var aboutme = require('./routes/about');
var portfolio = require('./routes/portfolio');
var viewresume = require('./routes/viewresume');
var sendemail = require('./routes/contactemail');
var frewprocess = require('./routes/portfolio/frewprocess');
var gasco = require('./routes/portfolio/gasco');
var mumoafruika = require('./routes/portfolio/mumoafruika');
var mumoafruikaui = require('./routes/portfolio/mumoafruikaui');
var gerf = require('./routes/portfolio/gerfusa');
var expenseallocation = require('./routes/portfolio/expenseallocation');


var app = express();

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

app.use('/', index);
app.use('/TAKUNDAEUGENEMUDARIKWA-RESUME', viewresume);
app.use('/about', aboutme);
app.use('/contact', contactme);
app.use('/portfolio', portfolio);
app.use('/sendemail', sendemail);
app.use('/portfolio/fpg',frewprocess);
app.use('/portfolio/gasco',gasco);
app.use('/portfolio/mumoafruika',mumoafruika);
app.use('/portfolio/mumoafruika-platform-ui',mumoafruikaui);
app.use('/portfolio/gerfusa',gerf);
app.use('/portfolio/expense', expenseallocation);

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
