const app = require('./server')
const request = require('supertest');

describe('Test the API is running', () => {
    it('tests /api/user endpoints', async() => {
        const response = request(app).get("/api/user/63341f50d6b9cb7fd44617bf");
        await expect(response.body).toEqual(expect.objectContaining(id,"63341f50d6b9cb7fd44617bf"))
    })

 
});