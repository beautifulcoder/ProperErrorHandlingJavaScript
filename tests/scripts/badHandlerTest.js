var badHandler = require('../../scripts/badHandler');
var should = require('should');

describe('A bad error handler', function() {
    it('returns a value without errors', function() {
        var fn = function() {
            return 1;
        };

        var result = badHandler(fn);

        result.should.equal(1);
    });

    it('returns a null with errors', function() {
        var fn = function() {
            throw Error('random error');
        };

        var result = badHandler(fn);

        should(result).equal(null);
    });
});
