const http = require('http');

describe('GET /hello', () => {
  it('responds with hello message', (done) => {
    const user = 'World';
    http.get('http://127.0.0.1:3000/hello?user=' + user, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        expect(response.statusCode).toBe(200);
        expect(data).toBe(`Hello ${user}`);
        done();
      });
    });
  });
});

