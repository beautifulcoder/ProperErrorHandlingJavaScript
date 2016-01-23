var http = require('http');
var route = require('./routes/route');

var app = http.createServer(function (req, res) {
    route.getIndex(res);
});

module.exports = app;
