import { rm as fsRm } from 'fs/promises'; 
import {resolve} from 'path';

const rm = async (path) => {
  await fsRm(resolve(path));
}

export default rm;