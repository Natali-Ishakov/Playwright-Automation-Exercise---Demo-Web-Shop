import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in/api';

test.describe('🛠 API Automation Tests - Reqres', () => {

  test('✅ GET - Fetch user by ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody.data).toHaveProperty('id', 2);
    expect(responseBody.data).toHaveProperty('email', 'janet.weaver@reqres.in');
    expect(responseBody.data).toHaveProperty('first_name', 'Janet');
  });

  test('✅ POST - Create a new user', async ({ request }) => {
    const newUser = { name: 'John Doe', job: 'Developer' };

    const response = await request.post(`${BASE_URL}/users`, { 
      data: newUser 
    });

    expect(response.status()).toBe(201);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('name', newUser.name);
    expect(responseBody).toHaveProperty('job', newUser.job);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
  });

  test('✅ PUT - Update user details', async ({ request }) => {
    const updatedUser = { name: 'Jane Doe', job: 'Manager' };

    const response = await request.put(`${BASE_URL}/users/2`, { 
      data: updatedUser 
    });

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('name', updatedUser.name);
    expect(responseBody).toHaveProperty('job', updatedUser.job);
    expect(responseBody).toHaveProperty('updatedAt');
  })

  test('✅ DELETE - Remove a user', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(204); // No content expected
  });

})
