exports.urlCreate = function urlCreate(urlPath) {
	var startNum = 1200000
	var stopNum = 12200000
	var urlResult = []
	for(var i = startNum; i < stopNum; i++) {
		urlResult.push(urlPath + i)
	}
	urlResult.push(25983044)
	console.log(urlResult)
	return urlResult
}