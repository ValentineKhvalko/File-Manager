import cp from "./cp.js";
import rm from "./rm.js";

const mv = (props) => {
  const [fileToRemove] = props.props.split(' ');

  const onEnd = async () => {
    await rm(fileToRemove);
    props.onEnd();
  }

  cp({...props, onEnd});
}

export default mv;