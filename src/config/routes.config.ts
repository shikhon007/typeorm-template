import { GlobalModuleConfig } from '@global/index';
import { LogModule } from '@log/index';
import { UserModule } from '@user/index';
import { Application } from 'express';

export default function configureRoutes(app: Application): GlobalModuleConfig[] {
  const modules: GlobalModuleConfig[] = [];

  modules.push(new UserModule(app));
  modules.push(new LogModule(app));

  return modules;
}
