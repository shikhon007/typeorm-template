import { body } from 'express-validator';

export const CreateLogValidator = [
  body('type').isString().isLength({ min: 3 }),
  body('desc').isString().isLength({ min: 5 }),
  body('createdBy').isString().isLength({ min: 3 }),
  body('updatedBy').isString().isLength({ min: 3 }),
];
