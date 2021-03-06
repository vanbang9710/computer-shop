import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Navbar from "./NavbarDashboard";
import {
  Add,
  AddShoppingCart,
  Dashboard,
  Home,
  Laptop,
  ModeNight,
  Settings,
} from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateInfo } from "../../redux/laptopInfoSlice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [expandProduct, setExpandProduct] = React.useState(false);
  const handleExpandProduct = () => {
    setExpandProduct(!expandProduct);
  };

  const [expandSetting, setExpandSetting] = React.useState(false);
  const handleExpandSetting = () => {
    setExpandSetting(!expandSetting);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Navbar setOpen={setOpen} open={open} />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton
            key="Trang ch???"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary="Trang ch???" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton
            key="Dashboard"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="T???ng quan" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton
            onClick={handleExpandProduct}
            key="Ch???nh s???n ph???m"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AddShoppingCart />
            </ListItemIcon>
            <ListItemText primary="S???n ph???m" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <Collapse in={expandProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 3.5 }}
                onClick={() => {
                  navigate("/dashboard/laptop/1");
                }}
              >
                <ListItemIcon>
                  <Laptop />
                </ListItemIcon>
                <ListItemText primary="Laptop" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 3.5 }}
                onClick={() => {
                  dispatch(updateInfo({}));
                  navigate("/dashboard/laptop/modify");
                }}
              >
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="Th??m s???n ph???m" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItemButton
            onClick={handleExpandSetting}
            key="C??i ?????t"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText primary="C??i ?????t" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <Collapse in={expandSetting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 3.5 }}>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <ListItemText primary="Ch??? ????? t???i" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
