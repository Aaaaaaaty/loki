var express = require('express');
var router = express.Router();

var redis = require('redis')
var client = redis.createClient(6379, 'localhost')

Object.prototype.toString = function(){
	return JSON.stringify(this)
}

client.set('a', {a: 1, b: 2})
client.get('a', function( v) {
	console.log('redis get hello',  v, typeof v)
})
module.exports = router;
