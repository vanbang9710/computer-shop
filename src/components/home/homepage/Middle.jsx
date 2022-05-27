import React from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";

const Middle = () => {
  return (
    <Card sx={{ width: "1200px", height: "880px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://hanoicomputercdn.com/media/banner/01_Apr45f876310e10d19aa8b44de759c69ffc.png"
          alt="asus tuff"
          sx={{ width: "1200px", height: "590px" }}
        />
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/279436405_738347547197018_261067288108447022_n.png?stp=dst-png_p960x960&_nc_cat=110&ccb=1-6&_nc_sid=ae9488&_nc_ohc=2itTh1rzwQIAX86rRiL&_nc_ht=scontent.fhan15-2.fna&oh=03_AVJtqY0wbUfQ-t8l6MOlkxNo3NQfQjh86n1z3PvBbokqXQ&oe=62A9E411"
          alt="asus tuff"
          sx={{ width: "1200px", height: "290px" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default Middle;
