import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const Right = () => {
  return (
    <Card flex={6} sx={{ width: "580px", height: "880px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://hanoicomputercdn.com/media/product/250_64227_pc_gaming_hacom_34.jpg"
          alt="sales"
          sx={{ width: "580px", height: "590px" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default Right;
