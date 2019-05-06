import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"

function NavTabs() {
  return (

    <header className="header sticky sticky--top js-header">

    <div className="grid">
  
      <nav className="navigation">
        <ul className="navigation__list navigation__list--inline">
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li>
    </ul>
          <input className="navigation__item" type="text"></input>
        </ul>
      </nav>
  
    </div>
  
  </header>

  );
}

export default NavTabs;
