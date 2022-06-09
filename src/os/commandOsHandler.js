import { env } from 'process';

const commandOsHandler = (command) => {
  if(command === '--homedir') {
    return env.HOME || env.USERPROFILE;
  }

  if(command === '--username') {
    return env.USERNAME;
  }

  if(command === '--EOL') {
    return 
  }

  if(command === '--cpus') {
    return 
  }

  if(command === '--architecture') {
    return 
  }

  return '\nInvalid input\n\n';
}

export default commandOsHandler;