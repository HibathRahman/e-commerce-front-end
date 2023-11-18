import React from "react";
import UnAuth from "../components/unAuth/unAuth";
import { Navigate } from "react-router";

const UserRoutes = ({ user, children }) => {
  return user && !user?.isAdmin ? (
    <>{children}</>
  ) : !user && !user?.isAdmin ? (
    <Navigate to="/login" />
  ) : (
    <UnAuth />
  );
};

export default UserRoutes;
