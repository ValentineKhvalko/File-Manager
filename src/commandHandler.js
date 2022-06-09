import { stdout } from 'process';

import exit from "./exit.js";

import cd from './nwd/cd.js';
import up from './nwd/up.js';
import ls from './nwd/ls.js';

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

    const splitedInput = input.split(' ');

    const command = splitedInput[0];
    const props = splitedInput[1];

    const isValidCommand = checkIsValidCommand(command);

    if(!isValidCommand) {
      stdout.write('\nInvalid input\n\n');
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
        stdout.write(commandOsHandler(props));
        break;

    } 

    youAreCurrentlyIn();
  } catch {
    stdout.write('\nOperation failed\n\n');
  }
}

export default commandHandler;