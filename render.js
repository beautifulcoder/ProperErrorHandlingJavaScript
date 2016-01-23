var fs = require('fs');

function render(res, path, contentType, fn) {
    fs.readFile(__dirname + '/' + path, 'utf-8', function (err, content) {
        fn(err, res, { response: content, type: contentType });
    });
}

module.exports = render;
