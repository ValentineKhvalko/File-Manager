import { VALID_COMMANDS } from './constants.js';

export const checkIsValidCommand = (command) => {
  return VALID_COMMANDS.includes(command) 
}