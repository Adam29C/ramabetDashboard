// src/components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  return !isAuthenticated ? <Component {...rest} /> : <Navigate to="/admin/dashboard" />;
};

export default PublicRoute;
