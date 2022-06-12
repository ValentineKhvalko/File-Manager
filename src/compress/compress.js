import { createBrotliCompress } from 'zlib';
import { resolve, basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';

const compress = async (props) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile);

	const readStream = createReadStream(pathToFile);
  const brotliCompress = createBrotliCompress();
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}.br`);

  const stream = readStream.pipe(brotliCompress).pipe(writeStream);

  const promise = new Promise((resolve, reject) => {
    stream.on('finish', resolve);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    brotliCompress.on('error', reject);
  })

  return promise;
}

export default compress;