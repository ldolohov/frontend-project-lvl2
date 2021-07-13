import path from 'path';
import fs from 'fs';
import _ from 'lodash';

export default (filepath1, filepath2) => {
    const currentPath = process.cwd();
    //console.log(currentPath)
    return [filepath1, filepath2]
        .map((filepath) => path.resolve(currentPath, `fixtures/${filepath}`))
        .map((normalizedPath) => JSON.parse(fs.readFileSync(normalizedPath)))
}