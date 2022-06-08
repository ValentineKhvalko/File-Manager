import process, { stdout, stdin, argv, env } from 'process';
import { homedir } from 'os';

import { commandHandler } from './commandHandler.js';
import { exit } from './exit.js';

const init = () => {
  const userName = argv[2].replace('--username=', '');

  stdout.write(`Welcome to the File Manager, ${userName}!\n\n`);

  // const homedir = homedir();

  // stdout.write(Object..join(', '))
  console.log(env);

  stdin.on('data', commandHandler);

  process.on('SIGINT', exit);

}

init();