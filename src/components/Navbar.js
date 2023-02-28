import React from "react";
import { Link, useLocation } from "react-router-dom";
import Reorder from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
