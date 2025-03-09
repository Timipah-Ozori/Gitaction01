// index.test.js
const request = require('supertest'); // Import supertest
const app = require('./index'); // Import the Express app from index.js

describe('GET /', () => {
  it('should return Hello World!', async () => {
    // Send a GET request to the root route
    const response = await request(app).get('/');

    // Assert that the status code is 200 (OK)
    expect(response.status).toBe(200);

    // Assert that the response body contains 'Hello World!'
    expect(response.text).toBe('Hello World!');
  });
});
