import React, { Fragment } from "react";
import { useField, ErrorMessage, Field } from "formik";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     color: "red",
//     fontSize: ".6rem",
//   },
// });
const TextField = ({ label, name, type, formik }) => {
  //   const classes = useStyles();
  //   const [field, meta] = useField(props);

  return (
    <div className="form-outline form-white mb-2">
      <input
        type={type}
        id={name}
        className="form-control"
        onChange={formik.handleChange(name)}
        value={formik.values[name]}
      />
      <label className="form-label" htmlFor="form5Example21">
        {formik.touched[name] && formik.errors[name] ? (
          <Fragment style={{ color: "white" }}>{formik.errors[name]}</Fragment>
        ) : (
          <div>{label}</div>
        )}
      </label>
    </div>
  );
};

export default TextField;
