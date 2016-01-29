window.addEventListener('error', function (err) {
    var stack = err.error.stack;
    if (stack) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/log', true);
        xhr.send(stack);
    }
});
