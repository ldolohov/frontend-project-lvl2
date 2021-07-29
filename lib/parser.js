import path from 'path';
import fs from 'fs';

export default (filepath1, filepath2) => {
  const currentPath = process.cwd();
  // console.log(currentPath)
  return [filepath1, filepath2]
    .map((filepath) => path.resolve(currentPath, `__fixtures__/${filepath}`))
    .map((normalizedPath) => JSON.parse(fs.readFileSync(normalizedPath)));
};
