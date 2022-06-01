import { Container, CssBaseline, Paper } from "@mui/material";
import React from "react";
import Orders from "./Order";

const InfoPanel = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <CssBaseline />
      <Paper
        sx={{ p: 2, marginTop: 20, display: "flex", flexDirection: "column" }}
      >
        <Orders />
      </Paper>
    </Container>
  );
};

export default InfoPanel;
