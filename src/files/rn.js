import { rename } from 'fs/promises'; 
import { resolve } from 'path';

const rn = async (props) => {
  const [oldFilePath, newFileName] = props.split(' ');
  const oldFileAbsolutPath = resolve(oldFilePath);

  await rename(oldFileAbsolutPath, newFileName);
}

export default rn;