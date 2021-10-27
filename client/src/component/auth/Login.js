import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const { email, password } = user;
  const submit = (e) => {
    e.preventDefault();
    console.log("submit called");
    try {
      if (email === "" && password === "") {
        //TODO alert send
        console.log("Please Fill both field");
      } else {
        //TODO Authinticate user
        console.log(
          "user is " + user.email + " and password is " + user.password
        );
      }
    } catch (error) {
      //TODO
    }
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: [e.target.value],
    });
  };

  const userSignUp = () => {
    history.push("/signup");
  };

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
          <div className="col-4 border border-3">Full Image</div>
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
