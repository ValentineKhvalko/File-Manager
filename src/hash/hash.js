import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const hash = async (path) => {  
	const fileBuffer = await readFile(resolve(path));
  const hashSum = createHash('sha256');
  hashSum.update(fileBuffer);
  const hex = hashSum.digest('hex');

  return hex;
};

export default hash;