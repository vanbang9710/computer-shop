import Sidebar from "../components/homepage/Sidebar";
import Feed from "../components/laptop/Feed";
import { Box } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <Box>
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
    </Box>
  );
}

export default App;
