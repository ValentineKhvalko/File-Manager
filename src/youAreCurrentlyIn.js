import { stdout, cwd } from 'process'
import { EOL } from 'os';

const youAreCurrentlyIn = () => {
  stdout.write(`${EOL}${EOL}You are currently in ${cwd()}${EOL}${EOL}`);
}

export default youAreCurrentlyIn