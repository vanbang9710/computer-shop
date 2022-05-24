import { Box } from "@mui/material";
import React from "react";
import CartContent from "../components/common/cartcontent/CartContent";
import NavBar from "../components/common/NavBar";

const Cart = () => {
  return (
    <Box>
      <NavBar />
      <CartContent />
    </Box>
  );
};

export default Cart;
