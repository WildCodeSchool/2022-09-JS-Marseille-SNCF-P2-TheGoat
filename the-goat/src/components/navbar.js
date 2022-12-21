import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [focusNavLink, setFocusNavLink] = useState("");
  const changeFocusNavItem = (itemTitle) => {
    setFocusNavLink(itemTitle);
  };
  console.log(focusNavLink);

  const changeBg = () => {};
  
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className="navContainer">
          <div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <div className="bgNavHome"></div>
              <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>

                {SidebarData.map((item, index) => {
                  return (
                    <li 
                      onMouseOver={() => changeFocusNavItem(item.title)}
                      key={index}
                      className={item.cName}>
                      <Link to={item.path}>
                        {item.icons}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
