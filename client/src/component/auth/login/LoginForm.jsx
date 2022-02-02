import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextField from "../../common/TextField";

const LoginForm = () => {
  const loginSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
        validationSchema={loginSchema}
      >
        {(formik) => (
          <div>
            <Form>
              <TextField
                label="Email address"
                name="email"
                type="email"
                formik={formik}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                formik={formik}
              />
              <div className="flexCenter" style={{ marginBottom: "13px" }}>
                <button
                  type="submit"
                  // onClick={sendEmail}
                  className="btn btn-primary"
                >
                  Log In
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
