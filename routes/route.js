var index = require('./index');
var script = require('./script');

function route(req, res) {
    if (script(req, res)) {
    } else {
        index(res);
    }
}

module.exports = route;
