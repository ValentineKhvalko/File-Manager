import { stdout } from 'process';
import { EOL } from 'os';

import exit from "./exit.js";

import cat from './files/cat.js';
import add from './files/add.js';
import rm from './files/rm.js';

import cd from './nwd/cd.js';
import up from './nwd/up.js';
import ls from './nwd/ls.js';

import hash from './hash/hash.js';

import commandOsHandler from './os/commandOsHandler.js';

import youAreCurrentlyIn from './youAreCurrentlyIn.js';
import { checkIsValidCommand } from "./utils.js";

const commandHandler = async (data) => {

  try {
    const input = data.toString().trim();

    if(input === '.exit') {
      exit()
      return;
    }

    const [command, ...propsArray] = input.split(' ');
    const props = propsArray.join(' ');

    const isValidCommand = checkIsValidCommand(command);

    if(!isValidCommand) {
      stdout.write(`${EOL}Invalid input${EOL}`);
      return;
    }

    switch(command) {
      case 'cd':
        cd(props);
        break;
      
      case 'up': 
        up();
        break;

      case 'ls':
        await ls()
        break;
      
      case 'os':
        const output = commandOsHandler(props);

        if(output === 'failed') {
          stdout.write(`${EOL}Invalid input${EOL}`);
          return;
        }

        stdout.write(output);
        break;
      
      case 'hash': 
        const fileHash = await hash(props);
        stdout.write(fileHash);
        break;

      case 'cat': 
        cat(props).pipe(stdout);
        break;
      
      case 'add':
        await add(props);
        stdout.write(`${EOL}File successfully added`);
        break;
      
      case 'rm': 
        await rm(props);
        stdout.write(`${EOL}File successfully removed`);
        break;
    }   

    youAreCurrentlyIn();
  } catch {
    stdout.write(`${EOL}Operation failed${EOL}${EOL}`);
  }
}

export default commandHandler;