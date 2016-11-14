function delay(time, callback) {
	setTimeout(function() {
		callback('slep time for' + time)}
	,time)
}
function run (generatorFun) {
	var generatorObj = generatorFun(resume)
	function resume(callbackValue) {
		generatorObj.next(callbackValue)
	}
	generatorObj.next()
}

run(function* generatorTest(resume) {
	console.log(yield delay(1000, resume))
	console.log(yield delay(1200, resume))
})
