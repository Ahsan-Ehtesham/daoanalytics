import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse"
          >
            <div className="position-sticky pt-4">
              <ul className="nav flex-column" id="nav_accordion">
                <li className="nav-item has-submenu">
                  <a
                    className="nav-link d-flex align-items-center active"
                    href="/"
                  >
                    <i className="fas fa-th-large fa-2x"></i>
                    Dashboard
                    <i className="fas fa-angle-down ms-auto"></i>
                  </a>
                  <ul className="submenu collapse">
                    <li>
                      <a className="nav-link" href="/">
                        Domain Names
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Virtual Worlds
                      </a>
                    </li>
                    <li>
                      <a className="nav-link active" href="/">
                        Trading Cards
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Collectibles
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Utility
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <i className="far fa-chart-bar fa-2x"></i>
                    About
                  </a>
                </li>
                {/* <li className="nav-item has-submenu">
                  <a className="nav-link" href="/">
                  <i className="far fa-chart-bar"></i>
                    Stats<i className="bi small bi-caret-down-fill"></i>
                  </a>
                  <ul className="submenu collapse">
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 5
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 6
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 7
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link" href="/">
                    Another submenus
                    <i className="bi small bi-caret-down-fill"></i>
                  </a>
                  <ul className="submenu collapse">
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 8
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 9
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 10
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/">
                        Submenu item 11
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <i className="fas fa-briefcase fa-2x"></i>
                    Feedback
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <i className="fas fa-folder fa-2x"></i>
                    People
                  </a>
                </li>
              </ul>

              {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="/"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
