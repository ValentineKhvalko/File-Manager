import { createReadStream } from 'fs';
import { resolve } from 'path';
import { stdout } from 'process'

const cat = async (path) => {
  const readStream = createReadStream(resolve(path));
  readStream.pipe(stdout);

  return new Promise((resolve, reject) => {
    readStream.on('end', resolve);
    readStream.on('error', reject);
  })
};

export default cat;