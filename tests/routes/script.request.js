var request = require('supertest');
var app = require('../../app');

describe('Get script', function () {
    it('responds with javascript', function (done) {
        request(app)
            .get('/scripts/error.js')
            .expect('Content-Type', /javascript/)
            .expect(200, done);
    });
});
