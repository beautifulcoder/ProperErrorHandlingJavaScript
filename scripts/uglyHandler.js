function uglyHandler(fn) {
    try {
        return fn();
    } catch (e) {
        throw new Error('a new error');
    }
}

if (typeof module === 'object') {
    module.exports = uglyHandler;
}
