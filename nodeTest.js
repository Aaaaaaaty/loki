process.nextTick(function() {
	console.log('nextTick delay 1')
})
setImmediate(function() {
	console.log('setImmediate delay 2')
})
process.nextTick(function() {
	console.log('nextTick delay 2')
})
setImmediate(function() {
	console.log('setImmediate delay 1')
	process.nextTick(function() {
		console.log('插入')
	})
})

console.log('正常执行')