var express = require('express');
var router = express.Router();

var redis = require('redis')
var client = redis.createClient(6379, 'localhost')

// Object.prototype.toString = function(){
// 	return JSON.stringify(this)
// }

// client.set('a', {a: 1, b: 2})
// client.get('a', function( v) {
// 	console.log('redis get hello',  v, typeof v)
// })

// client.lpush('list', '1')
// client.rpush('list', 'b')
// client.rpush('list', 'c')
// client.rpush('list', 'd')
client.lrange('list', 0, -1, (list)=>{
	console.log(list)
})

module.exports = router;
