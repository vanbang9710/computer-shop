import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        disabled
        id="outlined-basic"
        label="Số lượng"
        variant="outlined"
        defaultValue={props.quantity}
      />
    </Box>
  );
}
