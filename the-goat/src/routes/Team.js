
import React, { useState, useEffect } from "react";
import CardContain from "../components/CardContain";
import axios from "axios";
import "../components/Teams.css";
import '../components/CardContain.css';
// import CustomizedTables2 from "../components/CustomizedTables-2";
import Map from '../components/Map';

function Team (){
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
          setDataStanding(data.data[3]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding();
    }, []);
    console.log(dataStanding, "STATE");
    
//     const [dataStanding2, setDataStanding2] = useState();
  
//     const fetchStanding2 = () => {
//       const options = {
//         method: "GET",
//         url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
//         headers: {
//           "X-RapidAPI-Key": "30eac0cc41mshc3c64b153401231p173519jsna70ad75703ae",
//           "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
//         },
//       };
//       axios
//         .request(options)
//         .then((response) => response.data)
//         .then((data) => {
//           setDataStanding2(data.data[2]);
//           console.log(data);
//         });
        
//     };
//     useEffect(() => {
//       fetchStanding2();
//     }, []);
//     console.log(dataStanding2, "STATE-2");

    return (
        <div className="teams">
            <header className="teams-header">
                <h1 className='teams-main-header'>Teams</h1>
                <div className='Onegoat'>
                <h2 className='title'>One G.O.A.T</h2>
                </div>
            </header>
            <div className='body-teams' >
                <div className='card-teams-container'>
                
                    <div className='card-teams'>
                            <div className='title-card'>
                            Central Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding} />
                            </div>
                    </div>
                </div>
                
                {/* <div className="table-container">
                <CustomizedTables2 dataStanding2={dataStanding2} />
                </div> */}
            </div>
            <div className='teamsMapButtons'>
                <Map />
            </div>
            
        </div>
    );
  }

export default Team




