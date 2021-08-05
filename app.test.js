const request = require('supertest');
const app = require('./app');

describe('/', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
