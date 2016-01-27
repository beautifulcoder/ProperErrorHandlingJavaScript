(function (bomb) {
    var properButton = document.getElementById('proper');

    if (properButton) {
        properButton.addEventListener('click', function () {
            bomb();
        });
    }
}(error));
