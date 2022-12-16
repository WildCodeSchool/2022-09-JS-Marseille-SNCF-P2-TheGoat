import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CustomizedTables({ dataStanding }) {
  console.log(dataStanding, "DATASTANDING");

  const compare = (x, y) => {
    console.log(x.position - y.position, "compare");
    return x.position - y.position;
  };

  const result = dataStanding?.standings_rows?.sort(compare);
  console.log(result, "result");

  return (
    <>
      <TableContainer
        sx={{ witdh: 500 }}
        className="tableContainer"
        component={Paper}>
        <div className="calendar-title">NBA Eastern Conference 2022/2023</div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="tableRow">
              <TableCell>#</TableCell>
              <TableCell>logo</TableCell>
              <TableCell align="left">Teams</TableCell>
              <TableCell align="right">P</TableCell>
              <TableCell align="right">W</TableCell>
              <TableCell align="right">L</TableCell>
              <TableCell align="right">GB</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataStanding?.standings_rows?.map((dataStandingMap) => {
              return (
                <TableRow key="">
                  <TableCell component="th" scope="row">
                    {dataStandingMap?.position}
                  </TableCell>
                  <TableCell align="left">
                    <img
                      className="logo-table"
                      src={dataStandingMap?.team?.logo}
                      alt="logo Team"
                    />
                  </TableCell>
                  <TableCell align="left">
                    {dataStandingMap?.team?.name_full}
                  </TableCell>
                  <TableCell align="right">
                    {dataStandingMap?.fields?.matches_total}
                  </TableCell>
                  <TableCell align="right">
                    {dataStandingMap?.fields?.wins_total}
                  </TableCell>
                  <TableCell align="right">
                    {dataStandingMap?.fields?.losses_total}
                  </TableCell>
                  <TableCell align="right">
                    {dataStandingMap?.fields?.games_behind_total}
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
