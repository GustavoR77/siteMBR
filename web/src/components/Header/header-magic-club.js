import React from "react";

function Header() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-expand-lg fixed-top bg-menu-magicclub">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src="img/Logo_MBR-white.png"
                  width="120"
                  alt="logo"
                  className="img-fluid mb-2"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link page-scroll dropdown-toggle"
                      href="/#"
                      id="navbarDropdownHome"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Início
                    </a>
                    <div
                      className="dropdown-menu submenu"
                      aria-labelledby="navbarDropdownHome"
                    >
                      <a className="dropdown-item" href="/theme1">
                        Demo Template 1
                      </a>
                      <a className="dropdown-item" href="/theme2">
                        Demo Template 2
                      </a>
                      <a className="dropdown-item" href="/theme3">
                        Demo Template 3
                      </a>
                      <a className="dropdown-item" href="/theme4">
                        Demo Template 4
                      </a>
                      <a className="dropdown-item" href="/theme5">
                        Demo Template 5
                      </a>
                      <a className="dropdown-item" href="/theme6">
                        Demo Template 6
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      Sobre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link page-scroll dropdown-toggle" href="/#" id="navbarDropdownPage" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Páginas <span className="custom-nav-badge badge badge-primary badge-pill">New</span>
                      </a>
                      <div className="dropdown-menu submenu" aria-labelledby="navbarDropdownPage">
                          <a className="dropdown-item" href="login1">Login Page 1</a>
                          <a className="dropdown-item" href="login2">Login Page 2</a>
                          <a className="dropdown-item" href="signup1">Signup Page 1</a>
                          <a className="dropdown-item" href="signup2">Signup Page 2</a>
                          <a className="dropdown-item" href="resetPassword">Password Reset</a>
                          <a className="dropdown-item" href="changePassword">Change Password</a>
                          <a className="dropdown-item" href="download">Download Page</a>
                          <a className="dropdown-item" href="review">Review Page</a>
                          <a className="dropdown-item" href="faq">FAQ Page</a>
                          <a className="dropdown-item" href="404">404 Page</a>
                          <a className="dropdown-item" href="comingSoon">Coming Soon</a>
                          <a className="dropdown-item" href="thankyou">Thank You</a>
                          <a className="dropdown-item" href="team">Team Page</a>
                          <a className="dropdown-item" href="singleTeam">Team Single</a>
                      </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }

export default Header;
