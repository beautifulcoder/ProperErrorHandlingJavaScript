var engine = require('../engines/engine');

function getScript(req, res) {
    if (req.method === 'GET' && req.url.indexOf('/scripts/') >= 0) {
        var request = {
            path: req.url.slice(1),
            type: 'application/javascript'
        };
        engine.render(request, res, engine.httpHandler);
        return true;
    }
    return false;
}

module.exports = getScript;
