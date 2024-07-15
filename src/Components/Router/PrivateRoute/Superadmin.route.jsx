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
import PagesIndex from "../../Pages/PagesIndex";
import GameProvider from "../../Helpers/Provider/GameProvider";
import Games from "../../Pages/Superadmin/Games/AvailableGames/Games";
import GameProviderAdd from "../../Helpers/Provider/GameProviderAdd";
import GameRates from "../../Pages/Superadmin/Games/AvailableGames/GameRates";
import GameRatesAdd from "../../Helpers/Provider/GameRatesAdd";

// Mock authentication status

const adminRoutes = [
  {
    path: "/admin/",
    element: <Superadmin_Wraper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <PrivateRoute element={Dashboard} />,
      },
      {
        path: "users",
        element: <PrivateRoute element={UsersList} />,
      },
      {
        path: "user/add",
        element: <PrivateRoute element={Add_Edit_User} />,
      },
      {
        path: "employees",
        element: <PrivateRoute element={EmployeeList} />,
      },
      {
        path: "employee/add",
        element: <PrivateRoute element={Add_Edit_Employee} />,
      },
      {
        path: "employee/edit",
        element: <PrivateRoute element={Add_Edit_Employee} />,
      },
      {
        path: "user/profile",
        element: <PrivateRoute element={SuperAdminProfile} />,
      },
      {
        path: "system",
        element: <PrivateRoute element={System} />,
      },
      {
        path: "games",
        element: <PrivateRoute element={Games} />,
      },
      {
        path: "game/add",
        element: <PrivateRoute element={GameProviderAdd} />,
      },
        {
        path: "game/rates",
        element: <PrivateRoute element={GameRates} />,
      },
      {
        path: "game/rates/add",
        element: <PrivateRoute element={GameRatesAdd} />,
      },
      // {
      //   path: "game-rates",
      //   element: <PrivateRoute element={GameRates} />,
      // },
    ],
  },
];

export default adminRoutes;
