import React, { useState, useEffect } from "react";
import TeamListTables from "../components/TeamListTables";

import axios from "axios";
import "./TeamList.css";
import { Link, useLocation } from "react-router-dom";

import Header from "../components/Header";

function TeamListStanding() {
  const [teamListStanding, setTeamListStanding] = useState();

  let locationTeam = useLocation();
  const urlTeam = locationTeam?.pathname;
  console.log (urlTeam, "URL TEAM")

  const fetchStanding = () => {
    const options = {
      method: "GET",
      url: `https://sportscore1.p.rapidapi.com/teams/18793/players`,
      headers: {
        "X-RapidAPI-Key": "ef6debeca2mshe1ded1cdb40ce43p13cd35jsncc57eb401a86",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        setTeamListStanding(data.data);
      });
  };
  useEffect(() => {
    fetchStanding();
  }, []);

  return (
    <>
      <Header />
      <div className="team-list-container">
        <div className="table-list-container">
          <TeamListTables teamListStanding={teamListStanding} />
        </div>
      </div>
    </>
  );
}
export default TeamListStanding;