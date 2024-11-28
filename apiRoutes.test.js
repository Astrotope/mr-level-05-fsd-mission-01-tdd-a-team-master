const express = require('express');
const request = require('supertest');
const apiRoutes = require('./apiRoutes'); // Adjust path as necessary

// Mock implementations of API functions with named exports
jest.mock('./api-01', () => ({
  calculateCarValue: jest.fn().mockImplementation((input) => ({ car_value: "6620" }))
}));
jest.mock('./api-02', () => ({
  calculateRiskRating: jest.fn().mockImplementation((input) => ({ risk_rating: "3" }))
}));
jest.mock('./api-03', () => ({
  generateQuote: jest.fn().mockImplementation((input) => ({ yearly_premium: "330.70", monthly_premium: "27.56" }))
}));

const app = express();
app.use(express.json()); // Middleware for JSON parsing
app.use('/api', apiRoutes);

describe('API Routes', () => {
  test('POST /api/calculateCarValue', async () => {
    const response = await request(app)
      .post('/api/calculateCarValue')
      .send({ carModel: "Toyota Corolla", year: 2015 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ car_value: "6620" });
  });

  test('POST /api/calculateRiskRating', async () => {
    const response = await request(app)
      .post('/api/calculateRiskRating')
      .send({ age: 30, drivingExperience: 10 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ risk_rating: "3" });
  });

  test('POST /api/generateQuote', async () => {
    const response = await request(app)
      .post('/api/generateQuote')
      .send({ carValue: 15000, riskRating: 3 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ yearly_premium: "330.70", monthly_premium: "27.56" });
  });
});
