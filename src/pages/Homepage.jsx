import Sidebar from "../components/Sidebar";
import Middle from "../components/homepage/Middle";
import Right from "../components/homepage/Right";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Sidebar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        marginTop={10}
        marginLeft={8}
      >
        <Middle />
        <Right />
      </Stack>
    </Box>
  );
}

export default App;
