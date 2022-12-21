import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",

  },
  {
    title: "Game",
    path: "/game",
    icons: <IoIcons.IoMdBasketball />,
    cName: "nav-text",

  },
  {
    title: "Calendar",
    path: "/calendar",
    icons: <BsIcons.BsCalendarDateFill />,
    cName: "nav-text",
  },
  {
    title: "Teams",
    path: "/team",
    icons: <AiIcons.AiOutlineTeam />,
    cName: "nav-text",
  },
];
