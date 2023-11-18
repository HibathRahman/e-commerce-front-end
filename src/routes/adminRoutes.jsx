import React from "react";
import UnAuth from "../components/unAuth/unAuth";
import { Navigate } from "react-router";

const AdminRoutes = ({ user, children }) => {
  return user && !user?.isAdmin ? (
    <UnAuth />
  ) : user && user?.isAdmin ? (
    <>{children}</>
  ) : (
    <Navigate to="login" />
  );
};

export default AdminRoutes;
