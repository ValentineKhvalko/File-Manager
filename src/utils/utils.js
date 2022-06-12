import { VALID_COMMANDS, COMMANDS_WITH_ONE_PROP, COMMANDS_WITH_TWO_PROPS } from '../constants/constants.js';
import { EOL } from 'os';

export const checkIsValidCommand = (command) => {
  return VALID_COMMANDS.includes(command) 
}

export const checkIsValidProps = (command, propsLength) => {
  if(COMMANDS_WITH_ONE_PROP.includes(command) && propsLength < 1) {
    return false;
  } else if(COMMANDS_WITH_TWO_PROPS.includes(command) && propsLength < 2) {
    return false;
  } 

  return true;
}

export const formatCPUSData = (data) => (`
CPUS amount: \x1b[1m${data.length}\x1b[0m;
${data.map(cpu => {
  return `\x1b[32mmodel\x1b[0m: ${cpu.model}, \x1b[34mspeed\x1b[0m: \x1b[33m${Math.round(cpu.speed  / 1000)}\x1b[0m GHz;`
}).join(EOL)}
`)