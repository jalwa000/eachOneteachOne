import React from "react";
import { Redirect, Route } from "react-router-dom";

const Protected = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("userInfo") ? (
        <Cmp {...props} />
      ) : (
        <Redirect to="Login" />
      )
    }
  />
);

export default Protected;
