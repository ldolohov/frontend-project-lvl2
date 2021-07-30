//import { test, expect } from '@jest/globals';
import getDiff from '../lib/getdiff.js';
import path from 'path';

const testResult = `{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`;

test('basic functional', () => {
    const expectResult = getDiff('file1.json', 'file2.json');
    expect(expectResult).toMatch(testResult);
})