//
// SocketioServer.js
//
//
// Written by leezhm(c)126.com, 21st March, 2012
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last Modified by leezhm(c)126.com on 21st March, 2012.
//

var socketio = require('socket.io');

var app = express.createServer()
  , socketio = socketio.listen(app);
  
app.listen(80);

socketio.sockets.on('connection', function (socket) {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
    console.log(data);
  });
});