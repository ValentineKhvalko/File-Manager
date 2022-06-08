import { VALID_COMMANDS, VALID_PART_OF_COMMANDS } from './constants.js';

export const checkIsValidCommand = (command) => {
  return VALID_COMMANDS.includes(command) 
    || VALID_PART_OF_COMMANDS.some((valid_part) => command.indexOf(valid_part) >= 0);

}