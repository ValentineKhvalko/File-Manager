import { createReadStream, createWriteStream } from 'fs';
import { resolve, basename } from 'path';
import { pipeline } from 'stream';

const cp = ({props, onEnd, onError}) => {
  const [pathToFile, pathToNewDir] = props.split(' ');

  const absolutePathToFile = resolve(pathToFile);
  const absolutePathToNewDir = resolve(pathToNewDir);
  const fileName = basename(absolutePathToFile);

	const readStream = createReadStream(absolutePathToFile);
  const writeStream = createWriteStream(`${absolutePathToNewDir}\\${fileName}`);

  pipeline(readStream, writeStream, (err) => {
    if(err) onError()
    else onEnd()
  })
};

export default cp;