/* eslint-disable @typescript-eslint/no-unused-vars */
import Log from '@database/entity/log/log.entity';
import { LogService } from '@log/services/log.service';
import express, { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import { validates } from '@global/middlewares/express-validation.middle';
import { CreateLogValidator } from '@log/validators/log.validator';
import { wrap } from '@global/middlewares/wraps.middle';

// router instance
const router: Router = express.Router();

// Get log
router.get(
  '/',
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    let apiResposne = await fetch('https://jsonplaceholder.typicodes.com/posts');
    apiResposne = await apiResposne.json();
    return res.status(200).json({ message: apiResposne });
  }),
);

// create log
router.post('/', validates([...CreateLogValidator]), async (req: Request, res: Response) => {
  const logService: LogService = Container.get(LogService);
  const newLog: Log = await logService.create({
    ...req.body,
  });

  return res.status(201).json({
    message: 'Log Created Successfully',
    data: newLog,
  });
});

export default router;
