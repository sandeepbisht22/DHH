import React from "react";
import TextField from "../../../common/TextField";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../state/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SuggeestionSentEmail from "../../../layout/SuggeestionSentEmail";
const SendSuggestionSection = () => {
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
                <TextField
                  label="Email address"
                  name="email"
                  type="text"
                  formik={formik}
                  size={4}
                />

                <TextField
                  label="Suggestion"
                  name="suggestion"
                  type="text"
                  formik={formik}
                  size={4}
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
      <SuggeestionSentEmail open={open} handleClose={handleClose} />
    </section>
  );
};

export default SendSuggestionSection;
