import { Box } from "@mui/material";
import React from "react";
import InfoPanel from "../../components/dashboard/InfoPanel";
import Sidebar from "../../components/dashboard/SidebarDashboard";

const Dashboard = () => {
  return (
    <Box>
      <Sidebar />
      <InfoPanel />
    </Box>
  );
};

export default Dashboard;
