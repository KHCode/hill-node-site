var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', {title: 'Portfolio'})
});

router.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
});

router.get('/blog', (req, res) => {
  res.render('blog', {title: 'Blog'})
});



module.exports = router;
