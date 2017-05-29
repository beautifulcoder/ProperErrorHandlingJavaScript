var uglyHandlerImproved = require('../../scripts/uglyHandlerImproved');
var SpecifiedError = require('../../scripts/specifiedError');
var should = require('should');

describe('An ugly error handler with improvements', function () {
    it('returns a value without errors', function () {
        var fn = function () {
            return 1;
        };

        var result = uglyHandlerImproved(fn);

        result.should.equal(1);
    });

    it('returns a specified error with errors', function () {
        var fn = function () {
            throw new TypeError('type error');
        };

        should.throws(function () {
            uglyHandlerImproved(fn);
        }, SpecifiedError);
    });
});
