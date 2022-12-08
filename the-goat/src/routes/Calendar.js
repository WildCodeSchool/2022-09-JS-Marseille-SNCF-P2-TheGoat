import React, { useState, useEffect } from "react";
import CalendarContainer from "../components/CalendarContainer";
import axios from "axios";
import "./calendar.css";
function Calendar() {
  const [dataStanding, setDataStanding] = useState([]);

  const options = {
    method: "GET",
    url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
    headers: {
      "X-RapidAPI-Key": "013a444627mshf9bcad4107c99f3p12b47djsn6fa2257b0430",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    setDataStanding(response.data)
  }).catch(function (error) {
    console.error(error);
  });

  const standings = dataStanding.map ((data,index ) => {
      return(
        <tr>
              <td>{data.id}</td>
              
            </tr>
      )
  })

  return (
    <>
      <div className="calendar-contain">
        <CalendarContainer
        />{standings}
      </div>
    </>
  );
}

export default Calendar;
