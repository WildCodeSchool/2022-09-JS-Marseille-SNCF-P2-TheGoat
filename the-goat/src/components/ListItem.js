import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
// import { ListItemAvatar } from "@mui/material";

function ListItem() {
    const [dataLeague, setDataLeague] = useState([]);
  
    const options = {
      method: "GET",
      url: 'https://sportscore1.p.rapidapi.com/leagues/7422/seasons',
      params: {page: '1'},
      headers: {
        "X-RapidAPI-Key": "c53364e359msh99e703b624b1e43p13e611jsnf2d915ab38b1",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
      },
  
    };
    useEffect(() => {
      axios
        .request(options)
        .then((response) => {
          console.log(response.data, "responseData");
          setDataLeague(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    console.log(dataLeague?.data?.[3].slug?.team, "dataLeague");
  // il me faut les divisions avec les noms, les noms des teams, leurs logos
  // ensuite dans "standing_rows" je veux l'{"id"} et la {"position"} (de 1 à 5), ensuite" "team": {slug"} et {"logo"} 
    const standings = dataLeague?.data?.map((data, index) => {
      return (
        <tr>
          <thead>{data.slug}</thead>
          
        </tr>
      );
    });
    return (
      <>
        <div className="list-items">
          {/* <ListItemAvatar /> */}
        {standings}
        </div>
      </>
    );
}

  export default ListItem
