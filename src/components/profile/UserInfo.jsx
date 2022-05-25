import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import BuildIcon from "@mui/icons-material/Build";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../theme";
import { LaptopWindowsOutlined } from "@mui/icons-material";

const UserInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ marginTop: 10 }}>
        <CssBaseline />
        <Box>
          <Box>
            <Typography component="h1" variant="h5">
              Hồ sơ
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="surName"
                  label="Họ tên đệm"
                  name="surName"
                  autoComplete="surName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Tên"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Địa chỉ email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Mật khẩu"
                  name="password"
                  autoComplete="password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <Button startIcon={<SaveAltIcon />} variant="outlined">
                  Lưu những thay đổi
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button startIcon={<LogoutIcon />} variant="outlined">
                  Đăng xuất
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserInfo;
