var target = require('../../scripts/asyncHandler');
var should = require('should');

describe('An async error handler', function () {
    it('does not throw exceptions without errors', function () {
        var fn = function () {
            return 1;
        };
        should.doesNotThrow(function () {
            target(fn);
        });
    });

    it('does not catch exceptions with errors', function () {
        var fn = function () {
            throw new TypeError('type error');
        };
        failedPromise(function() {
            target(fn);
        }).should.be.rejectedWith(TypeError);
    });
});

function failedPromise(fn) {
    return new Promise(function(resolve, reject) {
        reject(fn);
    });
}
