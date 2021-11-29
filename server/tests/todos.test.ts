import { createConnection, getConnection } from 'typeorm';
import request from 'supertest';
// import express from 'express';
import app from '../src/app';
import seed from '../src/seed';

describe('Test Todos endpoints', () => {
  beforeAll(async () => {
    const connection = await createConnection('test');

    await seed(connection);
  });
  afterAll(async () => {
    const connection = getConnection('test');
    app.close();
    connection.entityMetadatas.forEach(async (entityMetadata) => {
      await connection.query(`DELETE FROM ${entityMetadata.tableName}`);
    });
    await connection.close();
  });
  it('Can get all todos', async () => {
    await request(app)
      .get('/api/todos')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  it('Can get a todo', async () => {
    await request(app).get('/api/todos/1').expect(200);
  });

  it('Can create a todo', async () => {
    await request(app)
      .post('/api/todos')
      .send({
        todo: 'Test',
      })
      .expect(201);
  });

  it('Can update a todo', async () => {
    await request(app)
      .put('/api/todos/1')
      .send({
        todo: 'Test',
        isDone: true,
      })
      .expect(201);
  });
});
