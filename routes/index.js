var engine = require('../engines/engine');

var request = {
    path: 'views/index.html',
    type: 'text/html',
    nocache: true
};

function getIndex(res) {
    engine.render(request, res, engine.httpHandler);
}

module.exports = getIndex;
