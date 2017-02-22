var express = require('express');
var router = express.Router();
var jokes = [];

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Joke Table',
    jokesArray: jokes
  });
});

router.post('/', function(req, res, next){
  var joke = req.body.joke;
  jokes.push(joke);
  res.render('index', {
    title: 'Joke Table',
    jokesArray: jokes
  });
});

module.exports = router;
