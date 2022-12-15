import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Audiowide from '../fonts/Audiowide-Regular.ttf'
import './CardContain.css'

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

export default function TeamsTables({ dataStanding }) {
  console.log(dataStanding, "DATASTANDING");

  const compare = (x, y) => {
    console.log(x.position - y.position, "compare");
    return x.position - y.position;
  };

  const result = dataStanding?.standings_rows?.sort(compare);
  console.log(result, "result");

  return (
    <>
      <TableContainer className="tableContainer" component={Paper}>
        <div className="calendar-title">NBA Eastern Conference 2022/2023</div>
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
                    <img
                      className="logo-table"
                      src={dataStandingMap?.team?.logo}
                      alt="logo Team"
                    />
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