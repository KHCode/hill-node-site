const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');
const exhbs = require('express-handlebars');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

/* GET home page. */
app.get('/', (req, res, next) => {
  res.sendFile('./public/home.html', {root: __dirname});
});

app.get('/portfolio', (req, res) => {
  axios.get('https://gitconnected.com/v1/portfolio/khcode')
    .then(response => console.log(response));
  res.sendFile('./public/portfolio.html', {root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./public/about.html', {root: __dirname});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.error(err.message);
  console.error(err.stack);
  console.error(err.status);
});

module.exports = app;
