import React from "react";
import StandingCards from "./StandingCards";
import "./calendar-container.css";

import "@fontsource/audiowide/400.css";

function CalendarContainer({
  dataStanding
}) {
  return (
    <div className="calendar-container">
      <StandingCards 
     {...dataStanding}
      />
    </div>
  );
}

export default CalendarContainer;
