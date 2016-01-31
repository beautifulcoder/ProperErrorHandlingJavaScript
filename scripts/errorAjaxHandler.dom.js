window.addEventListener('error', function (err) {
    var stack = err.error.stack;
    var message = err.error.toString();
    if (stack) {
        message += '\n' + stack;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/log', true);
    xhr.send(message);
});
