import React from "react";
import Header from "./Header";
import PageButtons from "./PageButtons";
import CardLegendContainer3 from "./CardLegendContainer3";
import "./Games.css";
import "./Header.css";
import "./PageButtons.css";
import "./CardLegendContainer";
import "./CardLegendContain";

function Games3() {
  return (
    <div className="Games">
      <Header />
      <div className="Body-games">
        <CardLegendContainer3 />
        <PageButtons />
      </div>
    </div>
  );
}

export default Games3;
