import { GlobalModuleConfig } from '@global/index';
import { Application } from 'express';
import logRouter from '@log/routes/log.route';

export class LogModule extends GlobalModuleConfig {
  constructor(app: Application) {
    super(app, 'log');
  }

  init(): void {
    this.app.use(this.pathVx('/'), logRouter);
  }
}
