//import { test, expect } from '@jest/globals';
import getDiff from '../lib/getdiff.js';
import path from 'path';

const testResult = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50 
    + timeout: 20
    + verbose: true
  }
  `;

test('basic functional', () => {
    expect(getDiff('file1.json', 'file2.json')).toBe(testResult);
})