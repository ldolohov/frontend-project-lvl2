import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export default (filepath1, filepath2) => {
  let result;
  const currentPath = process.cwd();
  const filepath = [filepath1, filepath2].map((fileName) => path.resolve(currentPath, `__fixtures__/${fileName}`));
  const extname = path.extname(filepath1);
  if (extname === '.json') {
    result = filepath.map((normalizedPath) => JSON.parse(fs.readFileSync(normalizedPath)));
  } else if (extname === '.yml' || extname === '.yaml') {
    result = filepath.map((normalizedPath) => yaml.load(fs.readFileSync(normalizedPath, 'utf8')));
  }
  return result;
};
