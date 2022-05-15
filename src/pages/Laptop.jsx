import { Box } from "@mui/material";
import React from "react";
import Feed from "../components/laptop/Feed";
import Sidebar from "../components/laptop/SidebarLapPage";

const Laptop = () => {
  return (
    <Box>
      <Sidebar />
      <Feed />
    </Box>
  );
};

export default Laptop;
