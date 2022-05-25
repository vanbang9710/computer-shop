import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          B2H
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
