import { Link } from "react-router-dom";
import "./button.css";

function button(props) {
  return (
    <div className="btn-container">
      <Link to="detail">
        <button className="btn-watch">Watch now</button>
      </Link>
      <button onClick={props.handleClick} className="btn-trailer">
        Watch trailer
      </button>
    </div>
  );
}
export default button;
