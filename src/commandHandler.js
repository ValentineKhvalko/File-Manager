import { stdout } from 'process';

import { exit } from "./exit.js"
import { checkIsValidCommand } from "./utils.js";

export const commandHandler = async (data) => {
  const command = data.toString().trim();
  const isValidCommand = checkIsValidCommand(command);

  if(!isValidCommand) {
    stdout.write('\nInvalid input\n\n');
    return;
  }

  if(command === '.exit') {
    exit();
    return;
  };

  stdout.write(command);

}