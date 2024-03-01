const axios = require('axios');

describe('Server API', () => {
  const baseURL = 'http://127.0.0.1:8080';

  describe('/items endpoint', () => {
    test('GET should retrieve all items', async () => {
      const response = await axios.get(`${baseURL}/items`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
    });

    test('POST should create a new item', async () => {
      const newItem = { id: 'test-id', value: 'test-value' };
      const postResponse = await axios.post(`${baseURL}/items`, newItem);
      expect(postResponse.status).toBe(201);
      expect(postResponse.data).toMatchObject(newItem);

      const getResponse = await axios.get(`${baseURL}/items`);
      expect(getResponse.data).toEqual(expect.arrayContaining([expect.objectContaining(newItem)]));
    });
  });

  describe('/items/:id endpoint', () => {
    const itemID = 'test-id';

    test('GET should retrieve an item by ID', async () => {
      const response = await axios.get(`${baseURL}/items/${itemID}`);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', itemID);
    });

    test('PUT should update an item by ID', async () => {
      const updatedItem = { id: itemID, value: 'updated-value' };
      const response = await axios.put(`${baseURL}/items/${itemID}`, updatedItem);
      expect(response.status).toBe(200);
      expect(response.data).toMatchObject(updatedItem);
    });

    test('DELETE should remove an item by ID', async () => {
      const response = await axios.delete(`${baseURL}/items/${itemID}`);
      expect(response.status).toBe(204);

      await expect(axios.get(`${baseURL}/items/${itemID}`)).rejects.toThrow('Request failed with status code 404');
    });
  });
});
