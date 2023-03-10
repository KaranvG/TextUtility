import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import moon from "./moon.svg";
// import sun from "./sun.svg";

export default function Navbar(props) {
  let moon =
    "https://img.icons8.com/fluency-systems-filled/48/null/crescent-moon.png";
  let sun = "https://img.icons8.com/ios-filled/50/FFFFFF/sun--v1.png";
  return (
    // bg-body-dark bg-dark navbar-dark   //
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>

            <div
              className={`form-check form-switch mx-4 me-auto text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <img
                src={props.mode === "white" ? moon : sun}
                loading="lazy"
                width="22"
                height="22"
                alt="light"
                className={`icon-moon svelte-x4cz0m mx-2`}
                type="checkbox"
                onClick={props.toggleMode}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title here",
  about: "About us",
};
