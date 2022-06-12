import { createReadStream, createWriteStream } from 'fs';
import { resolve, basename } from 'path';

const cp = async (props) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile);

	const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}`);

  const stream = readStream.pipe(writeStream);

  const promise = new Promise((resolve, reject) => {
    stream.on('finish', resolve);

    readStream.on('error', reject);
    writeStream.on('error', reject);
  })

  return promise;
};

export default cp;