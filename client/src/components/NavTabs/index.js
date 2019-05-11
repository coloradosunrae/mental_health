import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"

function NavTabs() {
  return (
  
      <nav className="navbar sticky navbar-light sticky--top js-header">
 
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link
          to="/statistics"
          className={window.location.pathname === "/statistics" ? "nav-link active" : "nav-link"}
        >
          Statistics
        </Link>
        <Link
          to="/contact/learn"
          className="nav-item"
        >
          Learn
        </Link>
      </nav>

  );
}

export default NavTabs;
