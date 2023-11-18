import React from "react";
import { Navigate } from "react-router";

const AuthLayout = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  if (userData) {
    if (userData.isAdmin) {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/home" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthLayout;
