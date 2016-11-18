var http=require('http');
var url = require('url');
var util = require('util');
var tencentyun = require('tencentyun');

var server=new http.Server();
server.on('request',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var urlinfo = url.parse(req.url,true),
        type = 'upload';

    if (urlinfo.query && urlinfo.query.type) {
        type = urlinfo.query.type;
    }

    //请将下面的bucket, projectId, secretId和secretKey替换成开发者自己的项目信息
    var bucket = 'vueim',
        projectId = '10073389',
        userid = 0,
        secretId = 'AKIDZ7UlqjZ9nGat8TtkvzwhL1Y4YBgGMLBq',
        secretKey = 'dAWgfkkZCoJdmkcJp28IJ8mEVpAPUWP7';

    tencentyun.conf.setAppInfo(projectId, secretId, secretKey);

    var error = false;
    console.log(type)
    switch(type) {
        case 'upload':
            var fileid = '/u/can/use/slash/sample' + Math.round(+new Date()/1000),
                expired = Math.round(+new Date()/1000) + 999,
                uploadurl = tencentyun.imagev2.generateResUrlV2(bucket, userid, fileid),
                sign = tencentyun.auth.getAppSignV2(bucket, fileid, expired);
                ret = {'sign':sign,'url':uploadurl};
            break;
        case 'stat':
            if (!urlinfo.query || !urlinfo.query.fileid) {
                error = true;
            } else {
                var fileid = decodeURIComponent(urlinfo.query.fileid),
                    // otherurl = tencentyun.imagev2.generateResUrlV2(bucket, userid, fileid),
                    otherurl = tencentyun.stat(bucket, fileid, function() {
                        console.log(ret)
                    })
                    ret = {'url':otherurl};
            }
            break;
        case 'del':
        case 'copy':
            if (!urlinfo.query || !urlinfo.query.fileid) {
                error = true;
            } else {
                var fileid = decodeURIComponent(urlinfo.query.fileid),
                    otherurl = tencentyun.imagev2.generateResUrlV2(bucket, userid, fileid, type),
                    sign = tencentyun.auth.getAppSignV2(bucket, fileid, 0);
                    ret = {'sign':sign,'url':otherurl};
            }
            break;
        case 'download':
            if (!urlinfo.query || !urlinfo.query.fileid) {
                error = true;
            } else {
                var fileid = decodeURIComponent(urlinfo.query.fileid),
                    expired = Math.round(+new Date()/1000) + 999,
                    sign = tencentyun.auth.getAppSignV2(bucket, fileid, expired);
                    ret = {'sign':sign};
            }
            break;
    }

    res.writeHead(200,{'Content-Type':'application/json'});
    if (error) {
        res.end({'error':'params error'});
    } else {
        res.end(JSON.stringify(ret)); 
    }
});

server.listen(9002);
console.log('HTTP SERVER is LISTENING AT PORT 9002.');