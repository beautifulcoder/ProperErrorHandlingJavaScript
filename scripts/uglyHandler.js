function uglyHandler(fn) {
    try {
        return fn();
    } catch (e) {
        throw Error('a new error');
    }
}

if (typeof module === 'object') {
    module.exports = uglyHandler;
}
