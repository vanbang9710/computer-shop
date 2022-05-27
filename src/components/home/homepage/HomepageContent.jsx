import { Container, Grid } from "@mui/material";
import React from "react";
import Middle from "./Middle";
import Right from "./Right";

const HomepageContent = () => {
  return (
    <Container maxWidth="axl" sx={{ marginTop: 10 }}>
      <Grid container>
        <Grid item xs={9}>
          <Middle />
        </Grid>
        <Grid item xs={3}>
          <Right />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomepageContent;
