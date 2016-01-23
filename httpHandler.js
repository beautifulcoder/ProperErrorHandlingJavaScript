function httpHandler (err, res, content) {
    if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('An error has occured: ' + err.message);
    } else {
        res.writeHead(200, { 'Content-Type': content.type });
        res.end(content.response);
    }
};

module.exports = httpHandler;
