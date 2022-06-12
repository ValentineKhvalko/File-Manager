import cp from "./cp.js";
import rm from "./rm.js";

const mv = async (props) => {
  const [fileToRemove] = props.split(' ');

  await cp(props);
  await rm(fileToRemove);
}

export default mv;