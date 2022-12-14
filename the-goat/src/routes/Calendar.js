import React, { useState, useEffect } from "react";
import CustomizedTables from "../components/CustomizedTables";
import axios from "axios";
import CalendarContainer from "../components/CalendarContainer";
import StandingCards from "../components/StandingCards";
import TestTable from "./TestTable";

function App() {
  const [dataStanding, setDataStanding] = useState();

  const fetchStanding = () => {
    const options = {
      method: "GET",
      url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
      headers: {
        "X-RapidAPI-Key": "30eac0cc41mshc3c64b153401231p173519jsna70ad75703ae",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        setDataStanding(data.data[0]);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchStanding();
  }, []);
  console.log(dataStanding, "STATE");
  return (
    <div className="App">
      <div>
        <CustomizedTables dataStanding={dataStanding} />
      </div>
    </div>
  );
}
export default App;
