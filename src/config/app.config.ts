import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3030,
  env: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '',
  jwtSecret: process.env.JWT_SECRET || '1234567890$',
};
