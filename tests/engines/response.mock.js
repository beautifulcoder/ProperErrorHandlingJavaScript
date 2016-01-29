function response() {
    var result = '';

    return {
        writeHead: writeHead,
        end: end,
        getResult: getResult
    };

    function writeHead(returnCode, headers) {
        result += returnCode;
        for (var prop in headers) {
            if (headers.hasOwnProperty(prop)) {
                result += headers[prop];
            }
        }
    }

    function end(body) {
        result += body;
    }

    function getResult() {
        return result;
    }
}

module.exports = response;
