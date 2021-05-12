const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');
const exphbs = require('express-handlebars');
const nodeCache = require('node-cache');
// const thisCache = new nodeCache();
const convert = require('./utils/displayNameConverter');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


/* GET Home page. */
app.get('/', (req, res, next) => {
  res.sendFile('./public/home.html', {root: __dirname});
});

/* GET Projects page. */
app.get('/portfolio', (req, res, next) => {
  app.locals.projects = [];
  axios.get('https://gitconnected.com/v1/portfolio/khcode')
    .then(response => {
      response.data.projects.forEach( el => {
        console.log(el.displayName)
        const fixed = convert.displayNameConverter(el.displayName);
        el.displayName = fixed;
        console.log(el.displayName)
      });
      app.locals.projects.push(...(response.data.projects))
      next()
    });
}, (req, res) => {
  res.render('portfolio', {projects: req.app.locals.projects});
});

/* GET About page. */
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
