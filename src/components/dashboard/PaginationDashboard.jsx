import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicPagination() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    navigate("/dashboard/laptop/" + value);
  };
  return (
    <Box marginBottom={5} paddingLeft={7}>
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={handleChange}
        sx={{ paddingLeft: 93, marginY: 1 }}
      />
      <Divider />
    </Box>
  );
}
