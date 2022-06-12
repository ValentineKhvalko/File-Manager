import { createBrotliDecompress } from 'zlib';
import { resolve, basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

const decompress = async ({props, onEnd, onError}) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile).replace('.br', '');

	const readStream = createReadStream(pathToFile);
  const brotliDecompress = createBrotliDecompress();
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}`);

  pipeline(readStream, brotliDecompress, writeStream, (err) => {
    if(err) onError()
    else onEnd()
  });
}

export default decompress;