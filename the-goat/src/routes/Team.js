
import React, { useState, useEffect } from "react";
import CardContain from "../components/CardContain";
import axios from "axios";
import "../components/Team.css";
import Map from '../components/Map';
import Header from "../components/Header";

function Team (){
    const [dataStanding, setDataStanding] = useState();

    const fetchStanding = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
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
//-----------------------------------------------------------------    
    const [dataStanding2, setDataStanding2] = useState();
  
    const fetchStanding2 = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
          "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => response.data)
        .then((data) => {
          setDataStanding2(data.data[4]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding2();
    }, []);
    console.log(dataStanding2, "STATE-2");
//------------------------------------------------------------

const [dataStanding3, setDataStanding3] = useState();
  
    const fetchStanding3 = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
          "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => response.data)
        .then((data) => {
          setDataStanding3(data.data[5]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding3();
    }, []);
    console.log(dataStanding3, "STATE-3");
//------------------------------------------------------------

const [dataStanding4, setDataStanding4] = useState();
  
    const fetchStanding4 = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
          "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => response.data)
        .then((data) => {
          setDataStanding4(data.data[6]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding4();
    }, []);
    console.log(dataStanding4, "STATE-4");
//------------------------------------------------------------

const [dataStanding5, setDataStanding5] = useState();
  
    const fetchStanding5 = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
          "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => response.data)
        .then((data) => {
          setDataStanding5(data.data[7]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding5();
    }, []);
    console.log(dataStanding5, "STATE-5");
//------------------------------------------------------------

const [dataStanding6, setDataStanding6] = useState();
  
    const fetchStanding6 = () => {
      const options = {
        method: "GET",
        url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
        headers: {
          "X-RapidAPI-Key": "92af1b4e9emsh6034f2ef537bdbdp120636jsnd456f52028d0",
          "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => response.data)
        .then((data) => {
          setDataStanding6(data.data[8]);
          console.log(data);
        });
        
    };
    useEffect(() => {
      fetchStanding6();
    }, []);
    console.log(dataStanding6, "STATE-6");

    return (
        <div className="teams">
            <Header/>
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
                   <div className='card-teams'>
                            <div className='title-card'>
                            Atlantic Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding2} />
                            </div>
                    </div>
                
                
                    <div className='card-teams'>
                            <div className='title-card'>
                            Southeast Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding3} />
                            </div>
                    </div>
                </div>
                <div className='card-teams-container'>
                
                    <div className='card-teams'>
                            <div className='title-card'>
                            Northwest Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding4} />
                            </div>
                    </div>
                    <div className='card-teams'>
                            <div className='title-card'>
                            Pacific Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding5} />
                            </div>
                    </div>
                    <div className='card-teams'>
                            <div className='title-card'>
                            Southwest Division
                            </div>
                            <div className='list-card'>
                                <CardContain dataStanding={dataStanding6} />
                            </div>
                    </div>
                </div>
                
                
            </div>
            <div className='teamsMapButtons'>
                <Map />
            </div>
            
        </div>
    );
  }

export default Team




