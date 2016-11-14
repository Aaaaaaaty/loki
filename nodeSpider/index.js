var cheerio = require('cheerio')  
var superagent = require('superagent')  
var fs = require('fs')
var path = require('./urlRandom.js')
// var url = path.urlCreate('http://movie.douban.com/subject/')
var url = 
var infoResult = []

// for(var i = 11000000; i < 0; i--) {
    superagent.get(url[i])
    .end(function(err, res) {
        if(err) {
            next(err)
        }
        var $ = cheerio.load(res.text, {
            xmlMode: true
        })
        var d = new Date()
        var date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()) // 取得爬取的日期
        var infoResult = { // 设定爬取的json数组
            date: date,
            info: []
        }
        var movieName = '电影名:' + $('#content h1 span').filter(function() {
            return $(this).attr('property') == 'v:itemreviewed'
        }).text()
        var directories = '- 导演名：' + $('#info span a').filter(function() {
            return $(this).attr('rel') == 'v:directedBy'
        }).text()
        var starName = '- 演员名：' + $('#info span a').filter(function() {
            return $(this).attr('rel') == 'v:starring'
        }).text()
        var result = movieName + '\r\n' + directories + '\r\n' + starName + '\r\n' 
        infoResult.info.push({
            movieName: movieName,
            directories: directories,
            starName: starName
        })
        console.log('i')
        console.log(infoResult.info[0].movieName)
    })
// }


// fs.writeFile('dbmovie.txt', data, 'utf-8', function(err){
//     if (err) throw err
//     else console.log('大体信息写入成功'+'\r\n' + data)
// })
