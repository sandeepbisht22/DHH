import React from "react";

const Rapper = ({ match }) => {
  return <div>Rapper Name {match.params.rapper}</div>;
};
export default Rapper;
