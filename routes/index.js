var render = require('../render');
var httpHandler = require('../httpHandler');

function getIndex(res) {
    render(res, 'views/index.html', 'text/html', httpHandler);
}

module.exports = getIndex;
