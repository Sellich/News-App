import { Link } from "react-router-dom";
import c from "./NavButton.module.scss";

const NavButton = (props) => {
  return (
    <div>
      <Link to={'/' + props.link} className={c.link}>
        {props.title}
      </Link>
    </div>
  )
}

export default NavButton;
