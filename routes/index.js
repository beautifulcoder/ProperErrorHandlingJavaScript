var engine = require('../engines/engine');

function getIndex(res) {
    var req = { path: 'views/index.html', type: 'text/html' };
    engine.render(res, req, engine.httpHandler);
}

module.exports = getIndex;
