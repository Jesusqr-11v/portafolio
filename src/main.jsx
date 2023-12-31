import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { AllProjects } from "./router/index.jsx";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error 404</p>,
  },
  {
    path: "/projects",
    element: <AllProjects />,
    errorElement: <p>Error 404</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
