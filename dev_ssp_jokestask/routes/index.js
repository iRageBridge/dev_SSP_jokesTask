var express = require('express');
var router = express.Router();
//var jokes = [];

router.get('/', function(req, res, next) {
  req.session.jokeTest;
  if (!req.session.hasOwnProperty('jokeTest')) {
    req.session.jokeTest = ['Works'];
  }
  else{
    req.session.jokeTest = ['Times Up!'];
  }
    res.render('index', {
      title: 'Joke Table',
      jokesArray: req.session.jokeTest
    });
});

router.post('/', function(req, res, next){
  var joke = req.body.joke;
  if(req.session.hasOwnProperty('jokeTest')){
    //if(req.session.jokeTest != []){
      req.session.jokeTest.push(joke);
      res.render('index', {
        title: 'Joke Table',
        jokesArray: req.session.jokeTest
      });
    //}
  }
});

module.exports = router;