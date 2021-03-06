import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../lib/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(`${filename}.txt`), 'utf-8');

const json = readFile('json');
const plain = readFile('plain');
const stylish = readFile('stylish');

test('stylish formatter', () => {
  const expectResultJSON = genDiff('file1.json', 'file2.json');
  const expectResultYML = genDiff('file1.yml', 'file2.yml');
  expect(expectResultJSON).toEqual(stylish);
  expect(expectResultYML).toEqual(stylish);
});

test('plain formatter', () => {
  const expectResultJSON = genDiff('file1.json', 'file2.json', 'plain');
  const expectResultYML = genDiff('file1.yml', 'file2.yml', 'plain');
  expect(expectResultJSON).toEqual(plain);
  expect(expectResultYML).toEqual(plain);
});

test('json formatter', () => {
  const expectResultJSON = genDiff('file1.json', 'file2.json', 'json');
  const expectResultYML = genDiff('file1.yml', 'file2.yml', 'json');
  expect(expectResultJSON).toEqual(json);
  expect(expectResultYML).toEqual(json);
});
