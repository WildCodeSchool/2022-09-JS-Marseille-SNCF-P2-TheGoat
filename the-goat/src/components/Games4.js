import React from "react";
import Header from "./Header";
import PageButtons from "./PageButtons";
import CardLegendContainer4 from "./CardLegendContainer4";
import "./Games.css";
import "./Header.css";
import "./PageButtons.css";
import "./CardLegendContainer";
import "./CardLegendContain";

function Games4() {
  return (
    <div className="Games">
      <Header />
      <div className="Body-games">
        <CardLegendContainer4 />
        <PageButtons />
      </div>
    </div>
  );
}

export default Games4;
