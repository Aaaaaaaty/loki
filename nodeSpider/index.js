var cheerio = require('cheerio')  
var superagent = require('superagent')  
var fs = require('fs')
// var path = require('./urlRandom.js')
// var url = path.urlCreate('http://movie.douban.com/subject/')
var url = 'http://weibo.com/1890157630/EhlKLocAX?type=comment#_rnd1479117806171'
var infoResult = []
superagent.get(url)
    .end(function(err, res) {
        if(err) {
            next(err)
        }
        var $ = cheerio.load(res.text, {
            xmlMode: true
        })
        console.log($.html())
        var d = new Date()
        var date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()) // 取得爬取的日期
        var infoResult = { // 设定爬取的json数组
            date: date,
            info: []
        }
        $('.WB_text a').each(function() {
            infoResult.info.push({
                'user': $(this).text
            })
        })
        var directories = '- 评论' + $('.WB_text').text()
        // var starName = '- 演员名：' + $('#info span a').filter(function() {
        //     return $(this).attr('rel') == 'v:starring'
        // }).text()
        // var result = movieName + '\r\n' + directories + '\r\n'
        // infoResult.info.push({
        //     movieName: movieName,
        //     directories: directories,
        //     // starName: starName
        // })
        // console.log(infoResult.info[0].movieName)
        console.log(infoResult)
    })


// fs.writeFile('dbmovie.txt', data, 'utf-8', function(err){
//     if (err) throw err
//     else console.log('大体信息写入成功'+'\r\n' + data)
// })
