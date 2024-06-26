import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
import PublicRoute from "../PublicRoute/index";
import ErrorPage from "../../Pages/Auth/NotFound";

// Mock authentication status
const isAuthenticated = "test"

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute element={Login} isAuthenticated={isAuthenticated} />,
    errorElement: <ErrorPage />,
  },
];

export default publicRoutes;
