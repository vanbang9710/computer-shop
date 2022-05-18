import { Box } from "@mui/material";
import React from "react";
import Category from "../components/laptop/Category";
import Sidebar from "../components/Sidebar";

const Laptop = () => {
  return (
    <Box>
      <Sidebar />
      <Category />
    </Box>
  );
};

export default Laptop;
