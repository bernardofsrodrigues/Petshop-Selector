const request = require('supertest');
const express = require('express');
const app = require('../app');

describe('Petshop API', () => {
  it('should return the best petshop', async () => {
    const response = await request(app)
      .post('/api/best-petshop')
      .send({
        date: '2024-06-12',
        smallDogs: 3,
        largeDogs: 2
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('bestPetshop');
  });
});
