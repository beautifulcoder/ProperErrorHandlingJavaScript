var uglyHandler = require('../../scripts/uglyHandler');
var should = require('should');

describe('An ugly error handler', function () {
    it('returns a value without errors', function () {
        var fn = function () {
            return 1;
        };

        var result = uglyHandler(fn);

        result.should.equal(1);
    });

    it('returns a new error with errors', function () {
        var fn = function () {
            throw new TypeError('type error');
        };

        should.throws(function () {
            uglyHandler(fn);
        }, Error);
    });
});
