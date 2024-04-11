import "../styles/Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="links-container">
      <ul className="links">
        <li>
          <Link className="link" to="/">
            Journal
          </Link>
        </li>
        <li>
          <Link className="link" to="/overview">
            Overview
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
