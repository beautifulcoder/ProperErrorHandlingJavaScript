(function (handler, bomb) {
    var badButton = document.getElementById('bad');

    if (badButton) {
        badButton.addEventListener('click', function () {
            handler(bomb);
            console.log('Imagine, getting promoted for hiding mistakes');
        });
    }
}(badHandler, error));
