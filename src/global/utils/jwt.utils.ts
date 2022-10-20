/* eslint-disable @typescript-eslint/no-explicit-any */
import appConfig from '@config/app.config';
import jwt from 'jsonwebtoken';

export async function getLongLivedToken(body: object, expireTime: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const secret: string = appConfig.jwtSecret;
      jwt.sign(body, secret, { expiresIn: expireTime }, (err, token) => {
        if (err) reject(err);
        if (token) resolve(token);
      });
    } catch (ex) {
      reject(ex);
    }
  });
}

export async function verifyLongLivedToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const secret: string = appConfig.jwtSecret;
      jwt.verify(token, secret, (err: any, payload: any) => {
        if (err) reject(err);
        resolve(payload);
      });
    } catch (ex) {
      reject(ex);
    }
  });
}
