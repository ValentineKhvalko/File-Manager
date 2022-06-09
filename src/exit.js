import process, { argv } from 'process';

const exit = () => {
  const userName = argv[2].replace('--username=', '');
  console.log(`\nThank you for using File Manager, ${userName}!\n`);
  process.exit();
}

export default exit;