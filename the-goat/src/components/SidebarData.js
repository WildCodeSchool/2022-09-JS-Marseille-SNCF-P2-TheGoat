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
    title: "Season",
    path: "/season",
    icons: <BsIcons.BsCalendarDateFill />,
    cName: "nav-text",
  },
  {
    title: "Stats",
    path: "/stats",
    icons: <MdIcons.MdOutlineQueryStats />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icons: <AiIcons.AiOutlineTeam />,
    cName: "nav-text",
  },
  {
    title: "Features",
    path: "/features",
    icons: <MdIcons.MdFeaturedVideo />,
    cName: "nav-text",
  },
];
