import * as React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Phương thức thanh toán
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Thanh toán khi giao hàng (COD)"
        />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label="Chuyển khoản qua ngân hàng"
        />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label="Thanh toán qua thẻ Visa, Master"
        />
      </FormGroup>
    </React.Fragment>
  );
}
