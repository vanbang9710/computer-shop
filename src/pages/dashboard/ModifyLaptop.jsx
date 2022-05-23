import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/dashboard/SidebarDashboard";
import Modify from "../../components/dashboard/laptop/Modify";

const ModifyLaptop = () => {
  return (
    <Box>
      <Sidebar />
      <Modify />
    </Box>
  );
};

export default ModifyLaptop;
