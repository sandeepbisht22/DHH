import React from "react";

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("On Submit called");
  };
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div className="container d-flex justify-content-center pb-5">
        <div
          className="row mt-5"
          style={{
            width: "50vh",
            backgroundColor: "#272727",
            color: "#61892F",
          }}
        >
          <form onSubmit={onSubmit} className="py-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                id="name"
                placeholder="User Name"
                type="text"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                placeholder="userEmail@sample.com"
              />
            </div>
            <div className="mb3">
              <label htmlFor="phoneno" className="form-label">
                Mobile No.
              </label>
              <input
                type="number"
                className="form-control"
                id="phoneno"
                name="phoneno"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password1" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Re-enter Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password2"
                name="password2"
              />
            </div>
            <button className="btn btn-primary " type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
