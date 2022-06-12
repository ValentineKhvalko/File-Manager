const COMMANDS_WITHOUT_PROPS = ['up', 'ls'];

export const COMMANDS_WITH_ONE_PROP = ['cd', 'cat', 'add', 'rm', 'os', 'hash'];

export const COMMANDS_WITH_TWO_PROPS = ['rn', 'cp', 'mv', 'compress', 'decompress'];

export const VALID_COMMANDS = [...COMMANDS_WITHOUT_PROPS, ...COMMANDS_WITH_ONE_PROP, ...COMMANDS_WITH_TWO_PROPS];