import { chdir } from 'process';
import { resolve } from 'path';

export const cd = (path) => {
  chdir(resolve(path));
}

export default cd
