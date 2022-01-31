import React, { Fragment } from "react";
import spinner from "../../resources/common/spinner.gif";

const Spinner = () => (
  <div
    style={{
      height: "90vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    ></img>
  </div>
);

export default Spinner;
