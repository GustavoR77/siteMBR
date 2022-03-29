import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-magicclub navbar-expand-lg fixed-top bg-menu-magicclub">
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
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#about">
                    Sobre Nós
                  </a>
                </li>
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
                    Nossos Jogos
                  </a>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownHome"
                  >
                    <a className="dropdown-item" href="/magic-club">
                      Magic Club
                    </a>
                    <a className="dropdown-item" href="/alt">
                      Alt
                    </a>
                    <a className="dropdown-item" href="/kubets">
                      Kubets
                    </a>
                    <a className="dropdown-item" href="/melhor-viagem">
                      Melhor Viagem
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link page-scroll dropdown-toggle"
                    href="/#"
                    id="navbarDropdownPage"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Nossos Produtos
                    {/* <span className="custom-nav-badge badge badge-primary badge-pill">
                      New
  </span> */}
                  </a>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownPage"
                  >
                    <a className="dropdown-item" href="login1">
                      Login Page 1
                    </a>
                    <a className="dropdown-item" href="login2">
                      Login Page 2
                    </a>
                    <a className="dropdown-item" href="signup1">
                      Signup Page 1
                    </a>
                    <a className="dropdown-item" href="signup2">
                      Signup Page 2
                    </a>
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
