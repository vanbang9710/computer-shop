import React from "react";
import { Box } from "@mui/material";
import UserInfo from "../components/profile/UserInfo";
import NavInfo from "../components/profile/NavInfo";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavInfo />
        <UserInfo />
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
