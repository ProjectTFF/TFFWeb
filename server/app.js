var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistRouter = require('./routes/artist');
var programmeRouter = require('./routes/programme');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/artist', artistRouter);
app.use('/api/programme', programmeRouter);

// Route to redirect unmatched routes back to homepage.
app.all('*', function(req, res) {
    res.redirect("back");
  });

module.exports = app;
