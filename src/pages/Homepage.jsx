import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "../components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const mainTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={mainTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
      </Box>
    </ThemeProvider>
  );
}

export default App;
