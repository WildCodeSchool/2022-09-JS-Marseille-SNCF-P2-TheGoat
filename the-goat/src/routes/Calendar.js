import React from "react";
import {CalendarContainer} from "../components/CalendarContainer"

function Calendar (){
  return (
    <>
    <div className="header"></div>
    <div className="title-calendar">
      <h1>Calendar</h1>
    </div>
    <CalendarContainer/>
    </>
  )
}

export default Calendar