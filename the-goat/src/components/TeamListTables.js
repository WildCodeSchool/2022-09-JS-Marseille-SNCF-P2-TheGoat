import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TeamListTables({ teamListStanding }) {
  console.log(teamListStanding, "DATASTANDING");

  const compare = (x, y) => {
    console.log(x.position - y.position, "compare");
    return x.position - y.position;
  };

  const result = teamListStanding?.shirt_number?.sort(compare);
  console.log(result, "result");

  return (
    <>
      <TableContainer
        sx={{ witdh: 500 }}
        className="tableContainer"
        component={Paper}>
        <div className="calendar-title">Boston Celtics</div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="tableRow">
              <TableCell>#</TableCell>
              <TableCell></TableCell>
              <TableCell align="center">Player</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Pays</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {teamListStanding?.map((teamListStandingMap) => {
              return (
                <TableRow key="">
                  <TableCell component="th" scope="row">
                    {teamListStandingMap?.shirt_number}
                  </TableCell>
                  <TableCell align="left">
                    <img
                      className="picture-table"
                      src={teamListStandingMap?.photo}
                      alt="logo Team"
                    />
                    
                  </TableCell>
                  <TableCell align="center">
                    {teamListStandingMap?.name}
                  </TableCell>
                  <TableCell align="center">
                    {teamListStandingMap?.position}
                  </TableCell>
                  <TableCell align="center">
                    {teamListStandingMap?.age}
                  </TableCell>
                  <TableCell align="center">
                    {teamListStandingMap?.nationality_code}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

