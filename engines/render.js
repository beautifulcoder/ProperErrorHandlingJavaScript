var fs = require('fs');
var path = require('path');

function render(res, req, fn) {
    var fullpath = path.join(__dirname, '../') + req.path;
    fs.readFile(fullpath, 'utf-8', function (err, content) {
        fn(err, res, { response: content, type: req.type });
    });
}

module.exports = render;
