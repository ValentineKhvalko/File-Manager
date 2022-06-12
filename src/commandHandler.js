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

const onEnd = youAreCurrentlyIn;
const onError = () => {
  stdout.write(`${EOL}Operation failed${EOL}${EOL}`);
}

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
        hash({path: props, onEnd: (hash) => {
          stdout.write(hash);
          onEnd();
        }, onError});

        return;

      case 'cat': 
        cat({path: props, onEnd, onError});
        return;
      
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
        cp({props, onEnd: () => {
          stdout.write(`${EOL}File successfully copied`);
          onEnd();
        }, onError});

        return;
      
      case 'mv':
        mv({props, onEnd: () => {
          stdout.write(`${EOL}File successfully moved`);
          onEnd();
        }, onError});

        return;

      case 'compress': 
        compress({props, onEnd: () => {
          stdout.write(`${EOL}File successfully compressed`);
          onEnd();
        }, onError})

        return;

      case 'decompress': 
        decompress({props, onEnd: () => {
          stdout.write(`${EOL}File successfully decompressed`);
          onEnd();
        }, onError})

        return;
    }   

    onEnd();
  } catch {
    onError();
  }
}

export default commandHandler;