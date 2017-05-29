(function (handler, bomb) {
    var asyncButton = document.getElementById('async');

    if (asyncButton) {
        asyncButton.addEventListener('click', function () {
            handler(bomb);
        });
    }
}(asyncHandler, error));
