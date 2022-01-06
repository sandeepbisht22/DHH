import React from "react";

import { Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Fragment } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return !isAuthenticated ? (
    <Navigate to="/login"></Navigate>
  ) : (
    <Component></Component>
  );
};

export default PrivateRoute;
