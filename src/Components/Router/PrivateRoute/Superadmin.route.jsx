// src/routes/AdminRoutes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Superadmin_Wraper from "../../Layout/Wraper/Wraper";

// Dashboard
import Dashboard from "../../Pages/Superadmin/Dashboard/Dashboard";

// Users
import UsersList from "../../Pages/Superadmin/Users/UsersList";

// Private Routes
import PrivateRoute from "../PrivateRoute/index";
import ErrorPage from "../../Pages/Auth/NotFound";
import Add_Edit_User from "../../Pages/Superadmin/Users/Add_Edit_User";
import SuperAdminProfile from "../../Pages/Superadmin/Profile/SuperAdminProfile";
import EmployeeList from "../../Pages/Superadmin/Employee/EmployeeList";
import Add_Edit_Employee from "../../Pages/Superadmin/Employee/Add_Edit_Employee";
import System from "../../Pages/Superadmin/PenalInfo/System";

// Mock authentication status
const isAuthenticated = ""

const adminRoutes = [
  {
    path: "/admin/",
    element: <Superadmin_Wraper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <PrivateRoute element={Dashboard} isAuthenticated={isAuthenticated} />,
      },
      {
        path: "users",
        element: <PrivateRoute element={UsersList} isAuthenticated={isAuthenticated} />,
      },
      {
        path: "user/add",
        element: <PrivateRoute element={Add_Edit_User} isAuthenticated={isAuthenticated} />,
      },      {
        path: "employees",
        element: <PrivateRoute element={EmployeeList} isAuthenticated={isAuthenticated} />,
      },
      {
        path: "employee/add",
        element: <PrivateRoute element={Add_Edit_Employee} isAuthenticated={isAuthenticated} />,
      },
      {
        path: "user/profile",
        element: <PrivateRoute element={SuperAdminProfile} isAuthenticated={isAuthenticated} />,
      },
      {
        path: "system",
        element: <PrivateRoute element={System} isAuthenticated={isAuthenticated} />,
      },

    ],
  },
];

export default adminRoutes;
