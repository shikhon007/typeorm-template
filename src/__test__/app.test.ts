import AppDataSource from '@database/index';
import request from 'supertest';
import app from '../app';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

test('[TEST] App health check', function () {
  return request(app).get('/_health').send({}).expect(200);
});
