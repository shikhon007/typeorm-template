import Log from '@database/entity/log/log.entity';
import AppDataSource from '@database/index';
import { ICreateLog } from '@log/types/log.interface';
import { Service } from 'typedi';

@Service()
export class LogService {
  async create(data: ICreateLog): Promise<Log> {
    let newLog: Log = await AppDataSource.manager.getRepository(Log).create({
      ...data,
    });
    newLog = await AppDataSource.manager.getRepository(Log).save(newLog);

    return newLog;
  }
}
