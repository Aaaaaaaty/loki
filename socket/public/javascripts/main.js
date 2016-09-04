$(function() {
  var i = 0

  var socket = io.connect('/')
  socket.on('open', function() {
    console.log('已连接')
    socket.emit('message','连接成功111')
    // socket.emit('login', {userid:123, username:'An'})
    // socket.on('login', function(obj) {
    //   console.log(obj.a)
    // })
    socket.on('test', function(o) {
      console.log(111111111)
    })
  })
  
})