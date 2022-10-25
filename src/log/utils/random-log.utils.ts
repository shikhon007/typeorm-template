import crypto from 'crypto';

export function generateRandomLog(salt: string) {
  return `${salt} : ${crypto.randomBytes(20).toString('hex')}`;
}
