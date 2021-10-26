import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <div>
      <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          <img
            src={logo}
            alt=""
            width="50"
            height="44"
            className="d-inline-block align-text-center me-2"
          />
          DAO Analytics
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <input
          className="form-control me-auto"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="search"
          id="search"
        />

        <div className="d-flex align-items-center icon-display">
          <Link
            className="me-2"
            to="/"
            id="medium"
            role="button"
            aria-expanded="false"
          >
            <i className="fab fa-medium icon"></i>
          </Link>

          <Link
            className="me-2"
            to="/"
            id="twitter"
            role="button"
            aria-expanded="false"
          >
            <i className="fab fa-twitter icon"></i>
          </Link>

          <Link to="/" id="discord" role="button" aria-expanded="false">
            <i className="fab fa-discord icon"></i>
          </Link>

          {/* <!-- Avatar --> */}
          <div className="dropdown dropdown-menu-end dropdown-menu-lg-start p-3">
            <Link
              to="/"
              className="d-block link-dark text-decoration-none text-white"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={logo}
                alt="avatar"
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              AE & Team <i className="fas fa-angle-down"></i>
            </Link>

            <ul
              className="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <Link className="dropdown-item" to="/">
                  New project...
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
