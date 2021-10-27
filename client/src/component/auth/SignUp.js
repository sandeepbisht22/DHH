import React from "react";
import { signUpUser } from "../../state/actions/userAction";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    password1: "",
    password2: "",
  });

  const { name, email, phoneno, password, password2 } = user;

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      email === "" ||
      name === "" ||
      phoneno === "" ||
      password1 === "" ||
      password2 === ""
    ) {
      //TODO throw alert to show empty field
      console.log("Fill every field");
    } else if (password1 !== password2) {
      //TODO throw alert to show that password1 is not equal to password2
      console.log("password1 is not equal to password2");
    } else {
      signUpUser({
        name,
        email,
        phoneno,
        password,
        password2,
      });
    }
    console.log("On Submit called");
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
                value={name}
                onChange={onChange}
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
                value={email}
                placeholder="userEmail@sample.com"
                onChange={onChange}
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
                value={phoneno}
                onChange={onChange}
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
                value={password1}
                onChange={onChange}
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
                value={password2}
                onChange={onChange}
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
