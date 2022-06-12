import { createBrotliCompress } from 'zlib';
import { resolve, basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

const compress = async ({props, onEnd, onError}) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile);

	const readStream = createReadStream(pathToFile);
  const brotliCompress = createBrotliCompress();
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}.br`);

  pipeline(readStream, brotliCompress, writeStream, (err) => {
    if(err) onError()
    else onEnd()
  })
}

export default compress;