import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../common/TextField";
import SuggeestionSentEmail from "./SuggeestionSentEmail";
import { useDispatch } from "react-redux";
import { userActions } from "../../state/actions";

const Footer = () => {
  const dispatch = useDispatch();
  const emailSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    suggestion: Yup.string().required("Suggestion is required"),
  });
  const sendEmail = (values) => {
    dispatch(
      userActions.sendEmail("Suggestion Email", values.email, values.suggestion)
    );
    console.log("send Email");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer className="bg-dark text-center text-white my-4">
      <div className="container p-4">
        <section className="mb-4">
          <a
            className="btn btn-outline-light m-1"
            href="https://www.facebook.com/sandeep.bisht.9212301/"
            target="_blank"
            rel="noreferrer noopener"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light m-1"
            href="https://twitter.com/Engg_hu_mai"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light m-1"
            href="https://www.instagram.com/sandeep0_obisht/"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light m-1"
            href="https://www.linkedin.com/in/sandeep-bisht-114429141/"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light m-1"
            href="https://github.com/sandeepbisht22"
            role="button"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        <section className="">
          <Formik
            initialValues={{ email: "", suggestion: "" }}
            onSubmit={(values) => {
              handleOpen();
              sendEmail(values);
            }}
            validationSchema={emailSchema}
          >
            {(formik) => (
              <div>
                <Form style={{ width: "100%", margin: "auto" }}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                      <p className="pt-2">
                        <strong>Send me a suggestion</strong>
                      </p>
                    </div>
                    <TextField
                      label="Email address"
                      name="email"
                      type="text"
                      formik={formik}
                    />

                    <TextField
                      label="Suggestion"
                      name="suggestion"
                      type="text"
                      formik={formik}
                    />
                    <div className="col-auto">
                      <button
                        type="submit"
                        // onClick={sendEmail}
                        className="btn btn-outline-light mb-4"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </section>
        <SuggeestionSentEmail open={open} handleClose={handleClose} />
        <section className="mb-4">
          <p>Let's explore DESI HIP HOP together and</p>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
