import { writeFile } from 'fs/promises';
import { cwd } from 'process';

const add = async (name) => {
  await writeFile(`${cwd()}/${name}`, '', {flag: 'wx'})
};

export default add;
