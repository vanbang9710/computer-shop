import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Middle = () => {
  return (
    <Card flex={6} sx={{ width: "1200px", height: "600px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://hanoicomputercdn.com/media/banner/01_Apr45f876310e10d19aa8b44de759c69ffc.png"
          alt="green iguana"
          sx={{ width: "1200px", height: "590px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Middle;
