var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const fileupload = require('express-fileupload');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistRouter = require('./routes/artist');
var programmeRouter = require('./routes/programme');
var soundbowRouter = require('./routes/soundbow');

var app = express();

// Setting cookie for client
// app.use(function(req, res, next) {
//   // Check if client sent cookie
//   var cookie = req.cookies.session;
//   if (cookie == undefined) {
//     // no: Set a new cookie
//     res.cookie('hasSentSound', false, {maxAge: 24 * 60 * 60 * 1000});
//     console.log('Cookie created for new client.');
//   }
// });

app.use(bodyParser.json({ type: 'application/*+json' }));
// If the user doesn't have a cookie ready, set it up.
app.use(cookieParser());
app.use(function(req, res, next) {
  var cookie = req.cookies.hasSentSound;
  if (cookie == undefined) {
      // no: Set a new cookie
      res.cookie('hasSentSound', false, {maxAge: 24 * 60 * 60 * 1000});
      console.log('Cookie created for new client. ');
  }
  else {
      console.log('cookie is: ' + req.cookies.hasSentSound);
  }
  next();
});

app.use(cors());
app.use(fileupload());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/artist', artistRouter);
app.use('/api/programme', programmeRouter);
app.use('/api/soundbow', soundbowRouter);

// Route to redirect unmatched routes back to homepage.
app.all('*', function(req, res) {
    res.redirect("back");
  });

module.exports = app;
