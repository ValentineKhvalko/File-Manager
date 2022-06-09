import { stdout, cwd } from 'process'

const youAreCurrentlyIn = () => {
  stdout.write(`\nYou are currently in ${cwd()}\n\n`);
}

export default youAreCurrentlyIn