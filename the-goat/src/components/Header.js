import React from "react";
import "./Header.css";
import { useLocation } from "react-router";

function Header() {
  let location = useLocation();

  const splitUrl = location?.pathname.replace("/", "");

  return (
    <header className="Header">
      <div className="Header-main-title">
        <h1>{splitUrl.toUpperCase()}</h1>
      </div>
      <div className="Header-title">
        <h2 className="Header-subtitle">The G.O.A.T</h2>
        <div className="Header-p">
          <p>32 Legends</p>
          <p>5 Weeks</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
