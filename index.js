import format from './lib/formatter/index.js';
import getDiffTree from './lib/getdiff.js';
import parser from './lib/parsers.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data = parser(path1, path2);
  const file1 = data[0];
  const file2 = data[1];
  const diffTree = getDiffTree(file1, file2);
  return format(diffTree, formatName);
};

export default genDiff;
