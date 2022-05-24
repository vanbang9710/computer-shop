import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  styled,
  TextField,
  Toolbar,
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

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "left",
  fontSize: 26,
});

const UserInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "970px" }}>
        <Box flex={4} p={6}>
          <Stack direction="row" spacing={1} margin="20px">
            <Avatar sx={{ width: "100px", height: "100px" }} />
            <StyleToolbar>Họ và tên</StyleToolbar>
          </Stack>
          <Box sx={{ "& > :not(style)": { m: 1 } }} border="2px solid black">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Button
                startIcon={<BuildIcon />}
                variant="outlined"
                sx={{ border: "2px solid black" }}
              >
                Sửa
              </Button>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Email" variant="standard" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Button
                startIcon={<BuildIcon />}
                variant="outlined"
                sx={{ border: "2px solid black" }}
              >
                Sửa
              </Button>
              <LocalPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Số điện thoại (thêm)"
                variant="standard"
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              spacing={"2px"}
            >
              <Button
                startIcon={<BuildIcon />}
                variant="outlined"
                sx={{ border: "2px solid black" }}
              >
                Sửa
              </Button>
              <HomeIcon
                sx={{
                  color: "action.active",
                  mr: 1,
                  my: 0.5,
                }}
              />
              <TextField
                id="input-with-sx"
                label="Địa chỉ"
                variant="standard"
              />
            </Box>
          </Box>
          <Stack margin="20px" direction="row" spacing={2}>
            <Button
              startIcon={<SaveAltIcon />}
              variant="outlined"
              sx={{ border: "2px solid black" }}
            >
              Lưu những thay đổi
            </Button>
            <Button
              startIcon={<LogoutIcon />}
              variant="outlined"
              sx={{ border: "2px solid black" }}
            >
              Đăng xuất
            </Button>
          </Stack>
        </Box>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default UserInfo;
