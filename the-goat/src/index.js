
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Stats from "./routes/Stats";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Season from "./routes/Season";
import Team from "./routes/Team";
import Versus from "./routes/Versus";
import Features from "./routes/Features";
import Start from "./routes/Start";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import "./App.css"

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "season",
        element: <Season />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "versus",
        element: <Versus />,
      },
      {
        path: "features",
        element: <Features />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
