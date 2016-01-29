var target = require('../../engines/httpHandler');
var response = require('./response.mock');
var should = require('should');

describe('An HTTP engine', function () {
    it('handles errors', function () {
        var res = response();
        target({ message: 'error' }, res);
        res.getResult().should.equal('500text/plainError: error');
    });

    it('handles responses', function () {
        var res = response();
        var content = { type: 'type', response: 'message' };
        target(null, res, content);
        res.getResult().should.equal('200typemessage');
    });

    it('handles responses with no-cache', function () {
        var res = response();
        var content = { type: 'type', response: 'message', nocache: true };
        target(null, res, content);
        res.getResult().should.equal('200typeno-cachemessage');
    });
});
