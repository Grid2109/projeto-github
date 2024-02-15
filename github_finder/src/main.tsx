import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx"

import "./index.css";

//Pages
import Home from "./routes/Home.tsx"; //Pages
//configurar um obj a partir da minha função
import Repos from "./routes/Repos.tsx";
const router = createBrowserRouter([
  {
    //meu App será o componente principal a se repetir em todas as páginas
    path: "/",
    element: <App />,
    //configurar página por página
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
