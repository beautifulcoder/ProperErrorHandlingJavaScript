var render = require('../render');
var httpHandler = require('../httpHandler');

function getIndex(res) {
    var req = { path: 'views/index.html', type: 'text/html' };
    render(res, req, httpHandler);
}

module.exports = getIndex;
