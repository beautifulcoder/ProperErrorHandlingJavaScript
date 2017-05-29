(function (handler, bomb) {
    var uglyButton = document.getElementById('ugly');

    if (uglyButton) {
        uglyButton.addEventListener('click', function () {
            handler(bomb);
        });
    }
}(uglyHandler, error));
