import React from "react";
import { Navigate } from "react-router";

const PublicRoutes = ({ user, children }) => {
  return user && user?.isAdmin ? (
    <Navigate replace to="/admin" />
  ) : user && !user?.isAdmin ? (
    <Navigate replace to="/home" />
  ) : (
    <>{children}</>
  );
};

export default PublicRoutes;
