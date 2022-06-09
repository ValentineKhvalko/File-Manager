import cd from "./nwd/cd.js"
import commandOsHandler from "./os/commandOsHandler.js"

const goToHomeDirr = () => {
  const userHomeDirr = commandOsHandler('--homedir');
  cd(userHomeDirr);
}

export default goToHomeDirr;