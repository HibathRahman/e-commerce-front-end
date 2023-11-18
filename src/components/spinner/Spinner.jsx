import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

function CustomSpinner() {
  return (
    <div className="spinner-1">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default CustomSpinner;
