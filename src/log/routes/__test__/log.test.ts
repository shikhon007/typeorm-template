import AppDataSource from '@database/index';
import request from 'supertest';
import app from '../../../app';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

test('[TEST] Log POST API Check', async function () {
  const res = await request(app)
    .post('/api/v1/log')
    .send({
      type: 'LOG',
      desc: 'hello world',
      createdBy: 'admin',
      updatedBy: 'admin',
    })
    .expect(201);
  expect(res.body.data.id).toBeTruthy();
});
