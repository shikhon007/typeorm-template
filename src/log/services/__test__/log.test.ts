import Log from '@database/entity/log/log.entity';
import AppDataSource from '@database/index';
import Container from 'typedi';
import { LogService } from '../log.service';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

test('[TEST] Create log test', async function () {
  const logService: LogService = Container.get(LogService);
  const newLog: Log = await logService.create({
    type: 'TEST_LOG',
    desc: 'Test log',
  });
  //   console.log(newLog);
  expect(newLog.id).toBeTruthy();
});
