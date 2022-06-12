import { createBrotliDecompress } from 'zlib';
import { resolve, basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async (props) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile).replace('.br', '');

	const readStream = createReadStream(pathToFile);
  const brotliDecompress = createBrotliDecompress();
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}`);

  const stream = readStream.pipe(brotliDecompress).pipe(writeStream);

  const promise = new Promise((resolve, reject) => {
    stream.on('finish', resolve);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    brotliDecompress.on('error', reject);
  })

  return promise;
}

export default decompress;