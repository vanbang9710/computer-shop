import { LaptopWindowsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const InfoPanel = () => {
  return (
    <Container>
      <CssBaseline />
      <Paper sx={{ marginTop: 10, maxWidth: "axs", height: 100 }}>
        <Grid container paddingLeft={3}>
          <Grid item xs={10}>
            <Typography variant="h3" component="h4">
              763
            </Typography>
            <Typography variant="body1" component="h4" sx={{ marginTop: 1 }}>
              Tổng số mẫu sản phẩm
            </Typography>
          </Grid>
          <Divider orientation="vertical" sx={{ marginTop: 1 }} flexItem />
          <Grid item xs paddingTop={3} paddingLeft={0.3}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LaptopWindowsOutlined />
            </Avatar>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InfoPanel;
