function asyncHandler(fn) {
    setTimeout(function () {
        fn();
    }, 1);
}

if (typeof module === 'object') {
    module.exports = asyncHandler;
}
