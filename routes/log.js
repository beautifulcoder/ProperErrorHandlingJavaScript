var engine = require('../engines/engine');

var content = {
    response: null,
    type: 'application/json',
    nocache: true
};

function postLog(req, res) {
    if (req.method === 'POST' && req.url === '/log') {
        engine.readPostData(req, function (body) {
            if (body) {
                console.log(body);
                console.log();
            }
            engine.httpHandler(null, res, content);
        });
        return true;
    }
    return false;
}

module.exports = postLog;
