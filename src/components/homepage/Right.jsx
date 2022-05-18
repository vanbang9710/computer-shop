import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Right = () => {
  return (
    <Card flex={6} sx={{ width: "500px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://hanoicomputercdn.com/media/product/250_62576_laptop_asus_vivobook_m7400qc_18.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Right;
