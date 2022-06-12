import { createReadStream } from 'fs';
import { resolve } from 'path';
import { stdout } from 'process'

const cat = ({path, onEnd, onError}) => {
  const readStream = createReadStream(resolve(path));
  readStream.pipe(stdout);

  readStream.on('end', onEnd);
  readStream.on('error', onError);
};

export default cat;