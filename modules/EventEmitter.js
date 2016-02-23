var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function (request) {
    request.approved = true;
});

server.on('request', function (request) {
    console.log(request)
});

server.emit('request', {from: 'Client'});

server.emit('request', {from: 'One more client'});

//server.emit('error'); will break down app if there are no listeners