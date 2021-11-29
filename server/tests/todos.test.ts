import { createConnection, getConnection } from 'typeorm';
import request from 'supertest';
import http from 'http';
import app from '../src/app';
import seed from '../src/seed';
import logger from '../src/utils/logger';
import supertest from 'supertest';

const port = process.env.PORT || 3001;

const api = supertest(app);

describe('Test Todos endpoints', () => {
  beforeAll(async () => {
    const connection = await createConnection('test');
    console.log(`Connected to ${connection.name}`);
    await seed(connection);
  });
  it('Can get all todos', async () => {
    await api
      .get('/api/todos')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  xit('Can get a todo', async () => {
    const res = await request(app).get('/api/todos/1');
    expect(res.status).toBe(200);
  });

  xit('Can create a todo', async () => {
    const res = await request(app).post('/api/todos').send({
      todo: 'Test',
    });
    expect(res.status).toBe(201);
  });

  xit('Can update a todo', async () => {
    const res = await request(app).put('/api/todos/1').send({
      todo: 'Test',
      isDone: true,
    });
    expect(res.status).toBe(201);
  });
  afterAll(async () => {
    const connection = getConnection('test');
    console.log(connection.name);

    // connection.entityMetadatas.forEach(async (entityMetadata) => {
    //   await connection.query(`DELETE FROM ${entityMetadata.tableName}`);
    // });
    await connection.close();
  });
});
