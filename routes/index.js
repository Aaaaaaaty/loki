var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var redis = require('redis')
var client = redis.createClient(6379, 'localhost')
client.set('hello', 'this is a value')

module.exports = router;
