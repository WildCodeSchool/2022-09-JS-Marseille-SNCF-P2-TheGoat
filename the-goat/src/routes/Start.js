import React from "react";
import "../components/Start.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <div className="start">
        
        <h1>
          <span className="title-start-t-1">t</span>
          <span className="title-start-h">h</span>
          <span className="title-start-e">e</span>
          <span className="title-start-g">g</span>
          <span className="title-start-o">.o</span>
          <span className="title-start-a">.a</span>
          <span className="title-start-t-2">.t</span>
        </h1>
        <h2>Greatest Of All Time</h2>
        <Link to="/home">
          <button className="ballon"></button>
        </Link>
      </div>
    </>
  );
}

export default Start;
