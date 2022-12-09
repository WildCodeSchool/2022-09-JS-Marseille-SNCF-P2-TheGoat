import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
// import CustomizedTables from "./Table";

function StandingCards() {
  return (
    <Box
      sx={{
        width: 500,
        height: 700,
        backgroundColor: "white",
        padding: 1,
      }}>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="audiowide">
            Western Conference 22/23
          </Typography>
          <table>
            <tr>
              <th>#</th>
              <th>Teams</th>
              <th>Play</th>
              <th>Win</th>
              <th>Lose</th>
              <th>PCT</th>
              <th>GB</th>
              <th>Str</th>
            </tr>
            
          </table>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StandingCards;
