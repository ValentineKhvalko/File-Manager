import { readdir } from 'fs/promises';
import { stdout, cwd } from 'process';

export const ls = async () => {
  const folder = cwd();
  const files = await readdir(folder);
  files.forEach(file => stdout.write(file + '\n'));
}

export default ls;