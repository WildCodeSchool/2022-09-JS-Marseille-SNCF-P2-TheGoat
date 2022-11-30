import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Stats from "./routes/Stats";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Season from "./routes/Season";
import Team from "./routes/Team";
import Fight from "./routes/Fight";
import Features from "./routes/Features";
import Navbar from "./components/Navbar";
import "./components/Navbar.css"

const AppLayout = () =>(
  
  <>
  <Navbar/>
  <Outlet/>
  </>
)
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "stats",
        element: <Stats/>,
      },
      {
        path: "game",
        element: <Game/>,
      },
      {
        path: "season",
        element: <Season/>,
      },
      {
        path: "team",
        element: <Team/>,
      },
      {
        path: "fight",
        element: <Fight/>,
      },
      {
        path: "features",
        element: <Features/>,
      },
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);