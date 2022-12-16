import React, { useState, useEffect } from "react";
import CustomizedTables from "../components/CustomizedTables";
import CustomizedTables2 from "../components/CustomizedTables-2";
import axios from "axios";
import "./calendar.css";
import Header from "../components/Header";

function TableStanding() {
  const [dataStanding, setDataStanding] = useState();

  const fetchStanding = () => {
    const options = {
      method: "GET",
      url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
      headers: {
        "X-RapidAPI-Key": "ef6debeca2mshe1ded1cdb40ce43p13cd35jsncc57eb401a86",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        setDataStanding(data.data[1]);
      });
  };
  useEffect(() => {
    fetchStanding();
  }, []);

  const [dataStanding2, setDataStanding2] = useState();

  const fetchStanding2 = () => {
    const options = {
      method: "GET",
      url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
      headers: {
        "X-RapidAPI-Key": "ef6debeca2mshe1ded1cdb40ce43p13cd35jsncc57eb401a86",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        setDataStanding2(data.data[2]);
      });
  };
  useEffect(() => {
    fetchStanding2();
  }, []);

  return (
    <>
      <Header />
      <div className="calendar-container">
        <div className="table-container">
          <CustomizedTables dataStanding={dataStanding} />
        </div>
        <div className="table-container">
          <CustomizedTables2 dataStanding2={dataStanding2} />
        </div>
      </div>
    </>
  );
}
export default TableStanding;
