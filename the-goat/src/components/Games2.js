import React from "react";
import Header from "./Header";
import PageButtons from "./PageButtons";
import CardLegendContainer2 from "./CardLegendContainer2";
import "./Games.css";
import "./Header.css";
import "./PageButtons.css";
import "./CardLegendContainer";
import "./CardLegendContain";

function Games2() {
  return (
    <div className="Games">
      <Header />
      <div className="Body-games">
        <CardLegendContainer2 />
        <PageButtons />
      </div>
    </div>
  );
}

export default Games2;
