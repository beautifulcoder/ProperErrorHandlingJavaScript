var asyncHandler = require('../../scripts/asyncHandler');
var should = require('should');

function failedPromise(fn) {
    return new Promise(function (resolve, reject) {
        reject(fn);
    });
}

describe('An async error handler', function () {
    it('does not throw exceptions without errors', function () {
        var fn = function () {
            return 1;
        };

        should.doesNotThrow(function () {
            asyncHandler(fn);
        });
    });

    it('does not catch exceptions with errors', function () {
        var fn = function () {
            throw new TypeError('type error');
        };

        failedPromise(function () {
            asyncHandler(fn);
        }).should.be.rejectedWith(TypeError);
    });
});
