const request = require('supertest');
const server = require('./server'); 
let app;

describe('Server Endpoints', () => {
  test('POST /api/calculateCarValue', async () => {
    const response = await request(server)
      .post('/api/calculateCarValue')
      .send({ model: "Toyota Corolla", year: "2015" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('car_value');
  });

  test('POST /api/calculateRiskRating', async () => {
    const response = await request(server)
      .post('/api/calculateRiskRating')
      .send({ claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes."});
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('risk_rating');
  });

  test('POST /api/generateQuote', async () => {
    const response = await request(server)
      .post('/api/generateQuote')
      .send({ car_value: 15000, risk_rating: 3 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('yearly_premium');
    expect(response.body).toHaveProperty('monthly_premium');
  });
});
