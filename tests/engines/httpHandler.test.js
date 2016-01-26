var target = require('../../engines/httpHandler');
var should = require('should');

describe('An HTTP engine', function () {
    it('handles errors', function () {
        var res = responseMock();
        target({ message: 'error' }, res);
        res.getResult().should.equal('500text/plainError: error');
    });

    it('handles responses', function () {
        var res = responseMock();
        var content = { type: 'type', response: 'message' };
        target(null, res, content);
        res.getResult().should.equal('200typemessage');
    });

    it('handles responses with no-cache', function () {
        var res = responseMock();
        var content = { type: 'type', response: 'message', nocache: true };
        target(null, res, content);
        res.getResult().should.equal('200typeno-cachemessage');
    });

    function responseMock() {
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
});
