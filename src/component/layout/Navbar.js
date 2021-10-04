import React, { Fragment } from "react";
import { useHistory } from "react-router";
import logo from "../../resources/images/desi-hip-hop.png";
const Navbar = (props) => {
  const history = useHistory();
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container-fluid">
          <a
            className="navbar-brand "
            href="#"
            onClick={() => history.push("/")}
          >
            <img src={logo} className="logo-image" />
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => history.push("/")}
                >
                  !Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artist
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => history.push("/artist/rappers")}
                    >
                      Rapper
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => history.push("/artist/beatproducers")}
                    >
                      Beat Producer
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => history.push("/reactionChannels")}
                >
                  Reaction Channels
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto flex-nowrap mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Our Solution
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  How We Help
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => history.push("/about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
