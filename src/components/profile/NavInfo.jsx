import { AppBar, Toolbar, styled, Box } from "@mui/material";
import React from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "left",
  fontSize: 36,
});

const NavInfo = () => {
  return (
    <Box position="static">
      <AppBar>
        <StyleToolbar>B2H - sự thỏa mãn tuyệt đối !</StyleToolbar>
      </AppBar>
    </Box>
  );
};

export default NavInfo;
