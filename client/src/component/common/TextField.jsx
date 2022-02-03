import React, { Fragment } from "react";
import { useField, ErrorMessage, Field } from "formik";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     color: "red",
//     fontSize: ".6rem",
//   },
// });
const TextField = ({ label, name, type, formik, size = 10 }) => {
  //   const classes = useStyles();
  //   const [field, meta] = useField(props);
  const sizeClassName = `col-md-` + size;
  return (
    <div
      className="form-outline form-white mb-2"
      className={sizeClassName}
      style={{ width: size * `10%` }}
    >
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
