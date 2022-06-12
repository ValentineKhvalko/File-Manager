import { stdout } from 'process';
import { EOL } from 'os';

import exit from "./utils/exit.js";

import compress from './compress/compress.js';
import decompress from './compress/decompress.js';

import cat from './files/cat.js';
import add from './files/add.js';
import rm from './files/rm.js';
import rn from './files/rn.js';
import cp from './files/cp.js';
import mv from './files/mv.js';

import cd from './nwd/cd.js';
import up from './nwd/up.js';
import ls from './nwd/ls.js';

import hash from './hash/hash.js';

import commandOsHandler from './os/commandOsHandler.js';

import youAreCurrentlyIn from './utils/youAreCurrentlyIn.js';
import { checkIsValidCommand, checkIsValidProps } from "./utils/utils.js";

const commandHandler = async (data) => {

  try {
    const input = data.toString().trim();

    if(input === '.exit') {
      exit();
      return;
    }

    const [command, ...propsArray] = input.split(' ');
    const props = propsArray.join(' ');

    const isValidCommand = checkIsValidCommand(command);
    const isValidPropsLength = checkIsValidProps(command, propsArray.length);

    if(!isValidCommand || !isValidPropsLength) {
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
        await cat(props);

        break;
      
      case 'add':
        await add(props);
        stdout.write(`${EOL}File successfully added`);

        break;
      
      case 'rm': 
        await rm(props);
        stdout.write(`${EOL}File successfully removed`);

        break;

      case 'rn': 
        await rn(props);
        stdout.write(`${EOL}File successfully renamed`);

        break;

      case 'cp': 
        await cp(props);
        stdout.write(`${EOL}File successfully copied`);

        break;
      
      case 'mv':
        await mv(props);
        stdout.write(`${EOL}File successfully moved`);

        break;

      case 'compress': 
        await compress(props)
        stdout.write(`${EOL}File successfully compressed`);

        break;

      case 'decompress': 
        await decompress(props)
        stdout.write(`${EOL}File successfully decompressed`);

        break;
    }   

    youAreCurrentlyIn();
  } catch {
    stdout.write(`${EOL}Operation failed${EOL}${EOL}`);
  }
}

export default commandHandler;