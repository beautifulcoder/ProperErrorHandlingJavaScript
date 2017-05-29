function httpHandler(err, res, content) {
    if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error: ' + err.message);
    } else {
        var headers = { 'Content-Type': content.type };
        if (content.nocache) {
            headers['Cache-Control'] = 'no-cache';
        }
        res.writeHead(200, headers);
        res.end(content.response);
    }
}

module.exports = httpHandler;
