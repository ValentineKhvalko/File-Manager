import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';

const hash = async ({path, onEnd, onError}) => {  
  const readStream = createReadStream(resolve(path));

  const hashSum = createHash('sha256');
  hashSum.setEncoding('hex');

  readStream.on('end', () => {
    hashSum.end()
    onEnd(hashSum.read());
  });

  readStream.on('error', onError);

  readStream.pipe(hashSum);
};

export default hash;