const { spawn } = require('child_process');
const axios = require('axios');

const serverUrl = 'http://localhost:8080';

let serverProcess;

beforeAll((done) => {
  serverProcess = spawn('python', ['server.py']); // Adjust the path to the actual location of server.go
  serverProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  serverProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    if (data.includes('Server is running on http://localhost:8080')) {
      done();
    }
  });
});

afterAll(() => {
  serverProcess.kill();
});

describe('Items API', () => {
  it('GET /items should return all items', async () => {
    const response = await axios.get(`${serverUrl}/items`);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.data).toBeInstanceOf(Array);
  });

  it('POST /items should create a new item', async () => {
    const newItem = { id: 'test1', value: 'Test Item 1' };
    const response = await axios.post(`${serverUrl}/items`, newItem);
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.data).toEqual(newItem);
  });

  it('GET /items/:id should return an item by id', async () => {
    const id = 'test1';
    const response = await axios.get(`${serverUrl}/items/${id}`);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.data).toHaveProperty('id', id);
  });

  it('PUT /items/:id should update an item', async () => {
    const id = 'test1';
    const updatedItem = { id: id, value: 'Updated Test Item 1' };
    const response = await axios.put(`${serverUrl}/items/${id}`, updatedItem);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.data).toEqual(updatedItem);
  });

  it('DELETE /items/:id should delete an item', async () => {
    const id = 'test1';
    const response = await axios.delete(`${serverUrl}/items/${id}`);
    expect(response.status).toBe(204);
  });
});
