import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const Right = () => {
  return (
    <Card sx={{ width: "500px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://hanoicomputercdn.com/media/product/250_64227_pc_gaming_hacom_34.jpg"
          alt="sales"
          sx={{ width: "500px", height: "500px" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default Right;
