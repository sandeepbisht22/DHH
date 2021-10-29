import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userActions, alertActions } from "../../state/actions";
import loginArtist from "../../resources/images/LoginArtist.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    console.log("Login called");
    try {
      if (email === "" && password === "") {
        console.log("Please Fill both field");
      } else {
        dispatch(
          userActions.loginUser({
            email,
            password,
          })
        );
      }
    } catch (error) {
      console.log(
        "[ LOGIN ] Error while loggin in due to exception" + error.message
      );
    }
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const userSignUp = () => {
    history.push("/signup");
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (
      error !== "" &&
      error !== null &&
      error.msg !== null &&
      error.msg !== ""
    ) {
      dispatch(alertActions.setAlert(error, "danger"));
      dispatch(userActions.clearErrors());
    }
  }, [error, isAuthenticated, history]);
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div className="container py-5">
        <div
          className="row justify-content-center p-3"
          style={{
            backgroundColor: "#272727",
            color: "#61892F",
          }}
        >
          <div className="col-4 border border-3">
            <div className="d-flex align-items-center justify-content-center ">
              <img src={loginArtist} alt="" className="mt-2" />
            </div>
          </div>
          <div className="col-7 border border-3">
            <h2 className="text-center">Login</h2>
            <div className="row mt-3">
              <section className="d-flex justify-content-evenly pt-2">
                <a href="!#">
                  <i
                    className="fab fa-google fa-3x"
                    style={{ color: "grey" }}
                  ></i>
                </a>
                <a href="!#">
                  <i
                    className="fab fa-facebook fa-3x"
                    style={{ color: "grey" }}
                  ></i>
                </a>
              </section>
            </div>
            <hr />
            <h6 className="text-center">OR</h6>
            <hr />

            <form className="pt-3" onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  id="inputEmail"
                  placeholder="yourEmail@sample.com"
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  minLength="6"
                  onChange={onChange}
                />
              </div>
              <div className="pb-2">
                <button type="submit" className="btn btn-primary ">
                  Login In
                </button>
                <button className="btn btn-primary ms-5 " onClick={userSignUp}>
                  Sign UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
