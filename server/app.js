var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const fileupload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistRouter = require('./routes/artist');
var programmeRouter = require('./routes/programme');
var soundbowRouter = require('./routes/soundbow');

var app = express();

app.use(cors());
app.use(fileupload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
