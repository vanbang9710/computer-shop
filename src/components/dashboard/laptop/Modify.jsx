import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const info = [
  "price",
  "manufacturer",
  "model",
  "color",
  "processor",
  "maxMemory",
  "graphicProcessor",
  "hardDrives",
  "optDrives",
  "display",
  "webcam",
  "audio",
  "wiredConnection",
  "wirelessConnection",
  "ports",
  "battery",
  "dimensions",
  "weight",
  "os",
  "accessories",
];

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="amd">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5">
          Sản phẩm
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                placeholder="Name"
              />
            </Grid>
            {info.map((info) => (
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete={info}
                  name={info}
                  fullWidth
                  id={info}
                  required={info.localeCompare("price") ? false : true}
                  label={
                    info.substring(0, 1).toLocaleUpperCase() + info.substring(1)
                  }
                  placeholder={
                    info.substring(0, 1).toLocaleUpperCase() + info.substring(1)
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <TextField
                autoComplete="thumb"
                name="thumb"
                required
                fullWidth
                id="thumb"
                label="Thumb"
                placeholder="Link"
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Xác nhận
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
