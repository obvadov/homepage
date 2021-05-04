import ReactDOM from "react-dom";
import Backdrop from "../../components/Backdrop/Backdrop";

const BufferingMode = ({classes}) => {
  return (
    <>
      ReactDOM.createPortal(
      <Backdrop classes={classes} />, document.getElementById('backdrop-root'))
    </>
  );
};

export default BufferingMode;
