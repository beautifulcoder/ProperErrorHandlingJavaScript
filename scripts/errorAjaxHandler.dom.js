window.addEventListener('error', function (e) {
    var stack = e.error.stack;
    var message = e.error.toString();
    if (stack) {
        message += '\n' + stack;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/log', true);
    xhr.send(message);
});
