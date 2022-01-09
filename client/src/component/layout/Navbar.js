import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router";
import logo from "../../resources/images/desi-hip-hop.png";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../state/actions";
import LogoutGoogle from "../auth/LogoutGoogle";
const Navbar = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Commenting as i am using  redux-persist for future so need to invoke everytime there is refresh
  // useEffect(() => {
  //   try {
  //     dispatch(userActions.loadUser());
  //   } catch (error) {
  //     console.log("Error while loading user call");
  //   }
  // }, []);

  const user = useSelector((state) => state.user.user);
  console.log(
    "user is " +
      JSON.stringify(user) +
      "and authentication is " +
      isAuthenticated
  );
  const authLinks = (
    <Fragment>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle text-dark"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </a>

          <div
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <a
              className="dropdown-item text-dark"
              href="#"
              onClick={() => navigate("/user")}
            >
              <i className="fas fa-user-ninja pe-2" color="black"></i>
              {user !== null && user.name}
            </a>
            <a className="dropdown-item " href="#">
              <LogoutGoogle></LogoutGoogle>
            </a>
          </div>
        </li>
      </ul>
    </Fragment>
  );
  const GuestLinks = (
    <Fragment>
      <a
        href="#"
        className="nav-link text-dark"
        onClick={() => navigate("/login")}
      >
        Login
      </a>
    </Fragment>
  );
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark "
        style={{
          background:
            "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(25,164,208,1) 47%, rgba(255,255,255,1) 73%",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#" onClick={() => navigate("/")}>
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
                  className="nav-link active text-dark"
                  aria-current="page"
                  onClick={() => navigate("/creators")}
                >
                  Creators
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/promoters")}
                >
                  Promotors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  href="#"
                  onClick={() => navigate("/labels")}
                >
                  Labels
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto flex-nowrap mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-dark"
                  onClick={() => navigate("/about")}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-dark"
                  onClick={() => navigate("/test")}
                >
                  Test
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-dark"
                  onClick={() => navigate("/about")}
                >
                  About
                </a>
              </li>

              {isAuthenticated ? authLinks : GuestLinks}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
