import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home/Home";
import ListaDeLeitura from "./pages/ListaDeLeitura/ListaDeLeitura";
import Lidos from "./pages/Lidos/Lidos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listadeleitura",
    element: <ListaDeLeitura />,
  },
  {
    path: "/lidos",
    element: <Lidos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
