import { env } from 'process';
import { cpus, EOL, arch } from 'os';
import { formatCPUSData } from '../utils.js';

const commandOsHandler = (command) => {
  if(command === '--homedir') {
    return env.HOME || env.USERPROFILE;
  }

  if(command === '--username') {
    return env.USERNAME;
  }

  if(command === '--EOL') {
    return JSON.stringify(EOL);
  }

  if(command === '--cpus') {
    return formatCPUSData(cpus());
  }

  if(command === '--architecture') {
    return arch();
  }

  return 'failed';
}

export default commandOsHandler;