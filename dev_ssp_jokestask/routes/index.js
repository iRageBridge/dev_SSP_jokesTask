var express = require('express');
var router = express.Router();
var joke = req.body.joke;
var jokes = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Joke Table', });
  for(var i = 0; i < jokes.length(); i++){ 
    jokeEntry: joke;
  }
});

router.post('/',function(req,res,next){
  jokes.push(joke);
});

module.exports = router;
