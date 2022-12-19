import React from "react";
import StartButton from "../components/StartButton";
import StartVideo from "../components/StartVideo";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="bghome"></div>
      <div className="button-container">
        <StartVideo />
        <div className="title-home">
        <h1>The G.O.A.T</h1>
        </div>
        <StartButton />
      </div>
    </div>
  );
}

export default Home;
