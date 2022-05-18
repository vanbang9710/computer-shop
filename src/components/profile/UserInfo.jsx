import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import BuildIcon from "@mui/icons-material/Build";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../theme";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "left",
  fontSize: 26,
});

const UserInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Box flex={4} p={6}>
          <Stack direction="row" spacing={1} margin="20px">
            <Avatar sx={{ width: "100px", height: "100px" }} />
            <StyleToolbar>Họ và tên</StyleToolbar>
          </Stack>
          <Box sx={{ p: "2px", border: "2px solid black" }} bgcolor="grey">
            <Stack direction="row" spacing={1} margin="10px">
              <Button startIcon={<BuildIcon />} variant="contained">
                Sửa
              </Button>
              <StyleToolbar>Email:</StyleToolbar>
            </Stack>
            <Stack direction="row" spacing={1} margin="10px">
              <Button startIcon={<BuildIcon />} variant="contained">
                Sửa
              </Button>
              <StyleToolbar>Số điện thoại:</StyleToolbar>
            </Stack>
            <Stack direction="row" spacing={1} margin="10px">
              <Button startIcon={<BuildIcon />} variant="contained">
                Sửa
              </Button>
              <StyleToolbar>Địa chỉ:</StyleToolbar>
            </Stack>
          </Box>
          <Stack margin="20px">
            <Button
              startIcon={<LogoutIcon />}
              variant="outlined"
              sx={{ border: "2px solid black" }}
            >
              Đăng xuất
            </Button>
          </Stack>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default UserInfo;
