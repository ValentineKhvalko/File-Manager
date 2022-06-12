import { createReadStream } from 'fs';
import { resolve } from 'path';

const cat = async (path) => {
  const readStream = createReadStream(resolve(path));
  readStream.on('error', () => {});

  return readStream;
};

export default cat;