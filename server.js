//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var jws = require('jws');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.get('/', function(req, res) {
  res.send('hello world');
});

router.post('/auth', function(req, res) {
  var signature = jws.sign({
    header: { alg: 'HS256' },
    payload: 'h. jon benjamin',
    secret: 'this is so smuud',
  });
  res.send({'sign': signature});
})


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
