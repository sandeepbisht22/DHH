import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { userActions } from "../../../state/actions";
import TextField from "../../common/TextField";

const SignupForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    // e.preventDefault();
    const { name, email, phoneno, password, confirmpassword } = values;

    if (
      email === "" ||
      name === "" ||
      phoneno === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      //TODO throw alert to show empty field
      console.log("Fill every field");
    } else if (password !== confirmpassword) {
      //TODO throw alert to show that password1 is not equal to confirmpassword
      console.log("password1 is not equal to confirmpassword");
    } else {
      dispatch(
        userActions.signUpUser({
          name,
          email,
          phoneno,
          password,
        })
      );
    }
    console.log("On Submit called");
  };

  const signupSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    phoneno: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone Number is not valid"
      )
      .required("Phone Number is must"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please Re-enter Password"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneno: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <TextField label="Name" name="name" type="name" formik={formik} />
              <TextField
                label="Email address"
                name="email"
                type="email"
                formik={formik}
              />

              <TextField
                label="Phone No."
                name="phoneno"
                type="phoneno"
                formik={formik}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                formik={formik}
              />
              <TextField
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                formik={formik}
              />
              <div className="flexCenter" style={{ marginBottom: "13px" }}>
                <button
                  type="submit"
                  // onClick={sendEmail}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
