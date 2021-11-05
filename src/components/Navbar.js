import React from "react";
import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <div>
      <header className="navbar navbar-dark fixed-top flex-md-nowrap p-0">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          <img
            src={logo}
            alt=""
            width="50"
            height="44"
            className="d-inline-block align-text-center me-2"
          />
          DAO Analytics
        </a>
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
          <a
            className="me-2"
            href="/"
            id="medium"
            role="button"
            aria-expanded="false"
          >
            <i className="fab fa-medium icon"></i>
          </a>

          <a
            className="me-2"
            href="/"
            id="twitter"
            role="button"
            aria-expanded="false"
          >
            <i className="fab fa-twitter icon"></i>
          </a>

          <a href="/" id="discord" role="button" aria-expanded="false">
            <i className="fab fa-discord icon"></i>
          </a>

          {/* <!-- Avatar --> */}
          <div className="dropdown dropdown-menu-end dropdown-menu-lg-start p-3">
            <a
              href="/"
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
            </a>

            <ul
              className="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="/">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
