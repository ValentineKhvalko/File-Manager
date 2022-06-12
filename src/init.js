import process, { stdout, stdin, argv } from 'process';
import { EOL } from 'os';

import commandHandler from './commandHandler.js';
import exit from './exit.js';
import goToHomeDirr from './goToHomeDirr.js';
import youAreCurrentlyIn from './youAreCurrentlyIn.js';

const init = () => {
  const userName = argv[2].replace('--username=', '');

  stdout.write(`Welcome to the File Manager, ${userName}!`);

  // console.log(JSON.stringify(EOL).replace(/\\/g, '\\'))

  goToHomeDirr();

  youAreCurrentlyIn();


  stdin.on('data', commandHandler);

  process.on('SIGINT', exit);

}

init();