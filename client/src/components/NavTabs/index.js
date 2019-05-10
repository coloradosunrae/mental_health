import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"

function NavTabs() {
  return (
  
      <nav className="navbar sticky navbar-light sticky--top js-header">
      <a className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </a>
      <a className="nav-item">
        <Link
          to="/statistics"
          className={window.location.pathname === "/statistics" ? "nav-link active" : "nav-link"}
        >
          Statistics
        </Link>
      </a>
      <a className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </a>
      <a className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </a>
      <a className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </a>

          <input className="navigation__item" type="text"></input>
      </nav>

  );
}

export default NavTabs;
