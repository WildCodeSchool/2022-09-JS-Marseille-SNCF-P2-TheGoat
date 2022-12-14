import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ dataStanding }) {
  console.log(dataStanding, "DATASTANDING");

  return (
    <>
      <TableContainer className="tableContainer" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>logo</StyledTableCell>
              <StyledTableCell align="left">Teams</StyledTableCell>
              <StyledTableCell align="right">P</StyledTableCell>
              <StyledTableCell align="right">W</StyledTableCell>
              <StyledTableCell align="right">L</StyledTableCell>
              <StyledTableCell align="right">GB</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataStanding?.standings_rows?.map((dataStandingMap) => {

              console.log(dataStandingMap, "INSIDE MAP");
                
              return (
                <StyledTableRow key="">
                  <StyledTableCell component="th" scope="row">
                    {dataStandingMap?.position}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <img src={dataStandingMap?.team?.logo} alt="logo Team" />
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {dataStandingMap?.team?.name_full}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {dataStandingMap?.fields?.matches_total}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {dataStandingMap?.fields?.wins_total}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {dataStandingMap?.fields?.losses_total}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {dataStandingMap?.fields?.games_behind_total}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
