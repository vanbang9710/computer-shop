import { Box } from "@mui/material";
import React from "react";
import Category from "../../components/dashboard/laptop/CategoryDashboard";
import Sidebar from "../../components/dashboard/SidebarDashboard";

const Laptop = () => {
  return (
    <Box>
      <Sidebar />
      <Category />
    </Box>
  );
};

export default Laptop;
