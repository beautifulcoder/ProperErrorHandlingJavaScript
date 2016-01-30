function asyncHandler(fn) {
    try {
        setTimeout(function () {
            fn();
        }, 1);
    } catch (e) { }
}

if (typeof module === 'object') {
    module.exports = asyncHandler;
}
