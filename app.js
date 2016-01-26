var http = require('http');
var route = require('./routes/route');

var app = http.createServer(function (req, res) {
    route(req, res);
});

module.exports = app;
