var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var routes = require('./routes/index')
var users = require('./routes/users')
var http = require('http')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/users', users)

var server = http.createServer(app)
var io = require('socket.io')(server)

var onlineUsers = {} //在线用户
var onlineCount = 0  //在线用户人数

io.on('connection', function(socket){
  
  socket.emit('open')
  socket.on('message', function(msg) {
    console.log(msg)
    socket.emit('test','test')
  })
  // //监听新用户加入
  // socket.on('login', function(obj) {
  //   console.log(obj)
  //   //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
  //       socket.name = obj.userid;

  //       //检查在线列表，如果不在里面就加入
  //       if(!onlineUsers.hasOwnProperty(obj.userid)) {
  //           onlineUsers[obj.userid] = obj.username;
  //           //在线人数+1
  //           onlineCount++;
  //       }

  //       //向所有客户端广播用户加入
  //       io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
  //       console.log(obj.username+'加入了聊天室');
  // })

})



