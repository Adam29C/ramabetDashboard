import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
import PublicRoute from "../PublicRoute/index";
import ErrorPage from "../../Pages/Auth/NotFound";
import BlockedUser from "../../Pages/Auth/BlockedUser";
import ExpiredUser from "../../Pages/Auth/ExpiredUser";






// Mock authentication status
const isAuthenticated = "";

const publicRoutes = [
  {
    path: "/",
    // element: <PublicRoute element={Login} isAuthenticated={isAuthenticated} />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/login",
      element: (
        <PublicRoute element={Login} isAuthenticated={isAuthenticated} />
      ),
    },
      {
        path: "blocked",
        element: (
          <PublicRoute element={BlockedUser} isAuthenticated={isAuthenticated} />
        ),
      },
      {
        path: "tokenexpiry",
        element: (
          <PublicRoute element={ExpiredUser} isAuthenticated={isAuthenticated} />
        ),
      },
    ],
  },
];

export default publicRoutes;
