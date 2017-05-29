var request = require('supertest');
var app = require('../../app');

describe('Post log', function () {
    it('responds with json', function (done) {
        request(app)
            .post('/log')
            .expect('Content-Type', /json/)
            .expect('Cache-Control', /no-cache/)
            .expect(200, done);
    });
});
