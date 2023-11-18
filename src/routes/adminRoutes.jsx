import React from "react";
import UnAuth from "../components/unAuth/unAuth";
import { Navigate } from "react-router";

const AdminRoutes = ({  children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return user && !user?.isAdmin ? (
    <UnAuth />
  ) : user && user?.isAdmin ? (
    <>{children}</>
  ) : (
    <Navigate to="login" />
  );
};

export default AdminRoutes;
