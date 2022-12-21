import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Team from "./routes/Team";
import Versus from "./routes/Versus";
import BostonCeltics from "./routes/BostonCeltics";
import Games2 from "./components/Games2";
import Games3 from "./components/Games3";
import Games4 from "./components/Games4";
import Start from "./routes/Start";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import "./App.css";
import Calendar from "./routes/Calendar";


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
        path: "game",
        element: <Game />,
      },
      {
        path: "calendar",
        element: <Calendar />,
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
        path: "game-2",
        element: <Games2/>,
      },
      {
        path: "game-3",
        element: <Games3/>,
      },
      {
        path: "game-4",
        element: <Games4/>,
      },
      {
        path: "Boston",
        element: <BostonCeltics />,
      },

      // {
      //   path: "features",
      //   element: <Features />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
