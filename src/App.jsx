// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/Main_Router";

const App = () => <RouterProvider router={router} />;

export default App;
