import process, { stdout, stdin, argv } from 'process';

import commandHandler from './commandHandler.js';
import exit from './utils/exit.js';
import goToHomeDirr from './utils/goToHomeDirr.js';
import youAreCurrentlyIn from './utils/youAreCurrentlyIn.js';

const init = () => {
  const userName = argv[2].replace('--username=', '');

  stdout.write(`Welcome to the File Manager, ${userName}!`);

  goToHomeDirr();
  youAreCurrentlyIn();

  stdin.on('data', commandHandler);
  process.on('SIGINT', exit);
}

init();