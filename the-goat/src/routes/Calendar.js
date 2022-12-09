import React, { useState, useEffect } from "react";
import CalendarContainer from "../components/CalendarContainer";
import axios from "axios";
import "./Calendar.css";

function Calendar() {
  const [dataStanding, setDataStanding] = useState([]);

  const options = {
    method: "GET",
    url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
    headers: {
      "X-RapidAPI-Key": "013a444627mshf9bcad4107c99f3p12b47djsn6fa2257b0430",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
    // params: {
    //   ID: 16975,
    // },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data, "responseData");
        setDataStanding(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(dataStanding?.data?.[0].slug, "dataStanding");

  const standings = dataStanding?.data?.map((data, index) => {
    return (
      <tr>
        <td>{data.slug}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="calendar-contain">
        <CalendarContainer />
        {standings}
      </div>
    </>
  );
}

export default Calendar;
