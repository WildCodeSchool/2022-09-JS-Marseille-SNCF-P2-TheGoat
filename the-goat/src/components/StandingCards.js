import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import CustomizedTables from "./CustomizedTables";

function StandingCards({
  dataStanding
}) {
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
            NBA 22/23
          </Typography>
          <CustomizedTables
            {...dataStanding}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

export default StandingCards;
