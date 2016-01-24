function error() {
    var foo = {};
    return foo.bar();
}

if (typeof module === 'object') {
    module.exports = error;
}
