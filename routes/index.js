var express = require('express');
var router = express.Router();
const getDetails = require('../public/javascripts/frontEndHelpers');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home', get_details: () => getDetails});
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', {title: 'Projects'})
});

router.get('/about', (req, res) => {
  res.render('about', {title: 'About Me'})
});

router.get('/blog', (req, res) => {
  res.render('blog', {title: 'My Notes'})
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact Me'})
});



module.exports = router;
