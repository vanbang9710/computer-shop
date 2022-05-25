import { Box } from "@mui/material";
import React from "react";
import Category from "../../components/home/laptop/Category";
import Sidebar from "../../components/home/Sidebar";

const Laptop = () => {
  return (
    <Box>
      <Sidebar />
      <Category />
    </Box>
  );
};

export default Laptop;
