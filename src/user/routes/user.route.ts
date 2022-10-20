import express, { Router, Request, Response } from 'express';
import { wrap } from '@global/middlewares/wraps.middle';
import UserService from '@user/services/user.service';
import Container from 'typedi';
import User from '@database/entity/user/user.entity';
import { validates } from '@global/middlewares/express-validation.middle';
import {
  CreateUserValidations,
  DeleteUserValidations,
  UpdateUserValidations,
  UserLoginValidations,
} from '@user/validators/user.validator';
import lo from 'lodash';
import BadRequestError from '@global/errors/bad-request.error';
import bcrypt from 'bcryptjs';
import { getLongLivedToken } from '@global/utils/jwt.utils';
import { auth } from '@global/middlewares/auth.middle';

// router instance
const router: Router = express.Router();

/**
 * Get user
 */
router.get(
  '/',
  [auth()],
  wrap(async (req: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log(req.user);
    const userService: UserService = Container.get(UserService);
    const users: User[] = await userService.get();
    return res.status(200).json({
      message: 'Request Successful',
      data: users,
    });
  }),
);

/**
 * Create user
 */
router.post(
  '/',
  [validates(CreateUserValidations)],
  wrap(async (req: Request, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const user: User = await userService.create({
      ...req.body,
      createdBy: 'ADMIN',
    });

    return res.status(201).json({
      message: 'Request Successful',
      data: lo.omit(user, ['password']),
    });
  }),
);

/**
 * Get user
 */
router.put(
  '/:id',
  [validates(UpdateUserValidations)],
  wrap(async (req: Request<{ id: number }>, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const user: User | null = await userService.update(req.params.id, req.body);
    return res.status(200).json({
      message: 'Request Successful',
      data: user,
    });
  }),
);

/**
 * Get user
 */
router.delete(
  '/:id',
  [validates(DeleteUserValidations)],
  wrap(async (req: Request<{ id: number }>, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const id: number = await userService.delete(req.params.id);
    return res.status(200).json({
      message: 'Request Successful',
      data: {
        id: id,
      },
    });
  }),
);

/**
 * User Login
 */
router.post(
  '/login',
  [validates(UserLoginValidations)],
  wrap(async (req: Request, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const user: User | null = await userService.getByMobile(req.body.mobile);
    if (!user) throw new BadRequestError('User not found');
    const isPassMatched: boolean = await bcrypt.compare(req.body.password, user.password);
    if (!isPassMatched) throw new BadRequestError('Invalid Credentials');
    const token = await getLongLivedToken({ id: user.id }, '12h');

    return res.status(200).json({
      message: 'Request Successful',
      data: {
        accessToken: token,
      },
    });
  }),
);

export default router;
