import _ from 'lodash';
import parser from './parsers.js';

export default (path1, path2) => {
  const data = parser(path1, path2);
  const file1 = data[0];
  const file2 = data[1];
  const result = [];

  const isThere = (key) => {
    if (_.has(file1, key) && !_.has(file2, key)) return `  - ${key}: ${file1[key]}`;
    if (!_.has(file1, key) && _.has(file2, key)) return `  + ${key}: ${file2[key]}`;
    if (file1[key] === file2[key]) {
      return `    ${key}: ${file1[key]}`;
    }
    return `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
  };

  const mergedJson = { ...file1, ...file2 };
  const keys = Object.keys(mergedJson).sort();
  /* eslint-disable-next-line */
  for (const key of keys) {
    result.push(isThere(key));
  }

  const res = result.join('\n');
  return `{\n${res}\n}\n`;
};
