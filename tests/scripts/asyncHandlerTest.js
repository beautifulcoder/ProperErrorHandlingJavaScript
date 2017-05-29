var asyncHandler = require('../../scripts/asyncHandler');
var should = require('should');

describe('An async error handler', function () {
    it('does not throw exceptions without errors', function (done) {
        var fn = function () {
            done();
        };

        should.doesNotThrow(function () {
            asyncHandler(fn);
        });
    });

    it('does not catch exceptions with errors', function () {
        var fn = function () {
            throw new TypeError('type error');
        };

        should.doesNotThrow(function () {
            asyncHandler(fn);
        });
    });
});
