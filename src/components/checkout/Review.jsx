import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W-1",
    desc: "A nice thing",
    price: "27999000₫",
  },
  {
    name: "Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W-2",
    desc: "Another thing",
    price: "27999000₫",
  },
  {
    name: "Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W-3",
    desc: "Something else",
    price: "27999000₫",
  },
  {
    name: "Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W-4",
    desc: "Best thing of all",
    price: "27999000₫",
  },
  { name: "Phí vận chuyển", desc: "", price: "Miễn phí" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Đơn hàng
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            27999000₫
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Thông tin giao nhận
          </Typography>
          <Typography gutterBottom>Vũ Đức Hiếu</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Phương thức thanh toán
          </Typography>
          <Typography>Thanh toán khi giao hàng (COD)</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
