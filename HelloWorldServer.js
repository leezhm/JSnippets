//
// HelloWorldServer.js
//
//
// Written by leezhm(c)126.com, 21st March, 2012
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last Modified by leezhm(c)126.com on 21st March, 2012.
//

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');