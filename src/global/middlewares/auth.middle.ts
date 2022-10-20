/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BadRequestError from '@global/errors/bad-request.error';
import { verifyLongLivedToken } from '@global/utils/jwt.utils';
import { Response, Request, NextFunction } from 'express';

export function auth(role?: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string | undefined = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) throw new BadRequestError('Token not provided');
      const payload: any = await verifyLongLivedToken(token);
      req.user = payload;
      next();
    } catch (ex) {
      next(new BadRequestError('Unauthorized access denied'));
    }
  };
}
