function readPostData(req, fn) {
    var body = '';
    req.on('data', function (chunck) {
        body += chunck;
    });
    req.on('end', function () {
        fn(body);
    });
}

module.exports = readPostData;
