var fs = require('fs');
var path = require('path');

function render(req, res, fn) {
    var fullpath = path.join(__dirname, '../') + req.path;
    fs.readFile(fullpath, 'utf-8', function (err, text) {
        var content = {
            response: text,
            type: req.type,
            nocache: req.nocache
        };
        fn(err, res, content);
    });
}

module.exports = render;
