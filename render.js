var fs = require('fs');

function render(res, req, fn) {
    var fullpath = __dirname + '/' + req.path;
    fs.readFile(fullpath, 'utf-8', function (err, content) {
        fn(err, res, { response: content, type: req.type });
    });
}

module.exports = render;
