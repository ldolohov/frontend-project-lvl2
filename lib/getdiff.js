import _ from 'lodash';
import parser from './parser.js';

export default (path1, path2) => {
  const json = parser(path1, path2);
  const json1 = json[0];
  const json2 = json[1];
  const result = [];

  const isThere = (key) => {
    if (_.has(json1, key) && !_.has(json2, key)) return `  - ${key}: ${json1[key]}`;
    if (!_.has(json1, key) && _.has(json2, key)) return `  + ${key}: ${json2[key]}`;
    if (json1[key] === json2[key]) {
      return `    ${key}: ${json1[key]}`;
    }
    return `  - ${key}: ${json1[key]} \n  + ${key}: ${json2[key]}`;
  };

  const mergedJson = { ...json1, ...json2 };
  const keys = Object.keys(mergedJson).sort();
  /* eslint-disable-next-line */
  for (const key of keys) {
    result.push(isThere(key));
  }

  const res = result.join('\n');
  return `{\n${res}\n}\n`;
};
