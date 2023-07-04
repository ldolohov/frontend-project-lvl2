import path from 'path';
import fs from 'fs';
import format from './lib/formatter/index.js';
import getDiffTree from './lib/getdiff.js';
import parse from './lib/parsers.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), `${filepath}`);
const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');
const getFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (path1, path2, formatName = 'stylish') => {
  const pathContent1 = readFile(path1);
  const pathContent2 = readFile(path2);
  const data1 = parse(pathContent1, getFormat(path1));
  const data2 = parse(pathContent2, getFormat(path2));
  const diffTree = getDiffTree(data1, data2);
  return format(diffTree, formatName);
};

export default genDiff;
