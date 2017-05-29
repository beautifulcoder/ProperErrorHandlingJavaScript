var SpecifiedError = require('./specifiedError');

function uglyHandlerImproved(fn) {
    try {
        return fn();
    } catch (e) {
        throw new SpecifiedError(e.message);
    }
}

module.exports = uglyHandlerImproved;
