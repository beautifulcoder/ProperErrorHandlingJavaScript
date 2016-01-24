function badHandler(fn) {
    try {
        return fn();
    } catch (e) { }
    return null;
}

if (typeof module === 'object') {
    module.exports = badHandler;
}
