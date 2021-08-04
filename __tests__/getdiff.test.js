import { expect, test } from '@jest/globals';
import getDiff from '../lib/getdiff.js';

const testResult = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('basic functional of json', () => {
  const expectResult = getDiff('file1.json', 'file2.json');
  expect(expectResult).toMatch(testResult);
});

test('basic functional of yml', () => {
  const expectResult = getDiff('file1.yml', 'file2.yml');
  expect(expectResult).toMatch(testResult);
});
