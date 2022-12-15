import React, { useState, useEffect } from "react";
import CustomizedTables from "../components/CustomizedTables";
import CustomizedTables2 from "../components/CustomizedTables-2";
import axios from "axios";
import "./Calendar.css";


function TableStanding() {
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
        setDataStanding(data.data[1]);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchStanding();
  }, []);
  console.log(dataStanding, "STATE");

  const [dataStanding2, setDataStanding2] = useState();

  const fetchStanding2 = () => {
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
        setDataStanding2(data.data[2]);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchStanding2();
  }, []);
  console.log(dataStanding2, "STATE-2");
  return (
    <div className="calendar">
      <div className="table-container">
        <CustomizedTables dataStanding={dataStanding} />
      </div>
      <div className="table-container">
        <CustomizedTables2 dataStanding2={dataStanding2} />
      </div>
    </div>
  );
}
export default TableStanding;
