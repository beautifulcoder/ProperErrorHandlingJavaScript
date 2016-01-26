var engine = require('../engines/engine');

function getIndex(res) {
    var request = { path: 'views/index.html', type: 'text/html' };
    engine.render(request, res, engine.httpHandler);
}

module.exports = getIndex;
