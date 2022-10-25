import { generateRandomLog } from '../random-log.utils';

test('[TEST] random log test', () => {
  expect(generateRandomLog('log')).toHaveLength(46);
});

test('[TEST] log difference check', () => {
  const log1 = generateRandomLog('log');
  const log2 = generateRandomLog('log');
  expect(log1 === log2).toBeFalsy();
});
