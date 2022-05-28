import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

/*
function executeOderList() {
  //todo: call api to execute order

  //delete orderList in sessionStorage
  sessionStorage.removeItem("productQuantity");
  sessionStorage.removeItem("orderList");
  sessionStorage.removeItem("totalPrice");
}
*/
export default function Review() {
  //when click button "ĐẶT HÀNG"

  const products = useSelector((state) => state.cartContent.info);
  const address = useSelector((state) => state.address.info);
  const totalPrice = useSelector((state) => state.price.totalPrice);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Đơn hàng
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={"Số lượng: " + product.quantity}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Phí vận chuyển" />
          <Typography variant="body2">Miễn phí</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Tổng cộng" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice}₫
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Thông tin giao nhận
          </Typography>
          <Typography gutterBottom>
            {address.firstName + " " + address.lastName}
          </Typography>
          <Typography gutterBottom>{address.address}</Typography>
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
