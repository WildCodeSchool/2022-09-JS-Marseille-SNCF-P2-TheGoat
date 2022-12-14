import React from 'react'

 const TestTable = ({position,
  logo,
  teamName,
  totalMatch,
  totalWins,
  totalLosses,
  gamesBehind,}) => {
  return (
    <div><table>
    <tr>
      <th>#</th>
      <th>Logo</th>
      <th>Equipes</th>
      <th>P</th>
      <th>W</th>
      <th>L</th>
      <th>GB</th> 
    </tr>
    <tr>
      <td>{position}</td>
      <td><img src={logo} alt="logo Team" /></td>
      <td>{teamName}</td>
      <td>{totalMatch}</td>
      <td>{totalWins}</td>
      <td>{totalLosses}</td>
      <td>{gamesBehind}</td>
    </tr>
   
  </table></div>
  )
}

export default TestTable


// import React, { useState, useEffect } from "react";
// import CustomizedTables from "../components/CustomizedTables";
// import axios from "axios";
// import CalendarContainer from "../components/CalendarContainer";
// import StandingCards from "../components/StandingCards";
// import TestTable  from "./TestTable";

// function App() {
//   const [dataStanding, setDataStanding] = useState();

//   const fetchStanding = () => {
//     const options = {
//       method: "GET",
//       url: "https://sportscore1.p.rapidapi.com/seasons/21630/standings-tables",
//       headers: {
//         "X-RapidAPI-Key": "30eac0cc41mshc3c64b153401231p173519jsna70ad75703ae",
//         "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
//       },
//     };
//     axios
//       .request(options)
//       .then((response) => response.data)
//       .then((data) => {
//         setDataStanding(data.data[0]);
//         console.log(data);
//       });
//   };
//   useEffect(() => {
//     fetchStanding();
//   }, []);
//   console.log(dataStanding, "STATE");
//   return (
//     <div className="App">
//       {dataStanding?.standings_rows?.map((dataStandingMap) => {
//         console.log(dataStandingMap, "INSIDE MAP");
//         return (
//           <div>
//             <CustomizedTables
//             position={dataStandingMap?.position}
//             logo= {dataStandingMap?.team?.logo}
//             teamName={dataStandingMap?.team?.name_full}
//             totalMatch={dataStandingMap?.fields?.matches_total}
//             totalWins={dataStandingMap?.fields?.wins_total}
//             totalLosses={dataStandingMap?.fields?.losses_total}
//             gamesBehind={dataStandingMap?.fields?.games_behind_total}
//             />
//             </div>
//         );
//       })}
//     </div>
//   );
// }
// export default App;
