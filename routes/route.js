var index = require('./index');
var script = require('./script');
var log = require('./log');

function route(req, res) {
    if (log(req, res)) {
    } else if (script(req, res)) {
    } else {
        index(res);
    }
}

module.exports = route;
