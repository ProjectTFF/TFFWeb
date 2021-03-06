const request = require('supertest');
const assert = require('assert');
const Server = require('../bin/www');


// console.log("env values:");
// console.log(process.env.PGPORT);
// console.log(process.env.PGHOST);

describe('Check that the Express server is up.', function () {
    it('respond with valid HTTP status code and description and message', function (done) {
      // Check status
      request(Server)
        .get('/api/status')
        .expect(204, done);
    });
});

describe('Testing GET/artist/#id endpoint', async () => {
  it('responds with valid http code and message type', async () => {
    // Make GET request and compare to expectations
    const res = await request(Server).get('/api/artist/1').send();
    
    // console.log("response: " + JSON.stringify(res));
    assert.equal(res.statusCode, 200);
    const responseType = typeof res.body;
    assert.equal(responseType, 'object', 'response type must be an object');
  })
});

describe('Testing GET/programme/#id endpoint', async () => {
  it('Responds with valid http code and message type', async () => {
    // Make GET request and compare to expectations
    const res = await request(Server).get('/api/programme/2').send();

    console.log("response: " + JSON.stringify(res));
    assert.equal(res.statusCode, 200);
    const responseType = typeof res.body;
    assert.equal(responseType, 'object', 'response type must be an object');
  })
})