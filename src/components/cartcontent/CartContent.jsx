import { Delete } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Quantity from "./QuantitySelect";

const cards = JSON.parse(sessionStorage.getItem("orderList"))||[];

//@todo: mấy cái này khi click chưa refesh trang nên nó chưa nhận thấy thay đổi cần setState gì gì đó tôi cũng không biết

//Total amount of the product in the cart
function totalPriceOrder(card) {
  let total = 0;
  card.forEach((item) => {
    total += item.Price * item.Quantity;
  });
  sessionStorage.setItem("totalPrice", total);
  return total;
}

//delete item from cart
function deleteItem(element) {
  let index = cards.indexOf(element);
  cards.splice(index, 1);
  sessionStorage.setItem("orderList", JSON.stringify(cards));
}
  

const CartContent = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Container sx={{ py: 10 }} maxWidth="lg">
      <CssBaseline />
      <Typography variant="h4" component="h4" marginBottom={4}>
        Giỏ hàng
      </Typography>
      {/* End hero unit */}
      <Grid container spacing={7}>
        {cards.map((card) => (
          <Grid item key={card.Name} xs={12}>
            <Card
              sx={{
                display: "flex",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  // 16:9
                }}
                image={card.Thumb}
                alt="random"
              />
              <CardContent sx={{ cursor: "default", paddingRight: 5 }}>
                <Typography gutterBottom variant="h7" component="h4">
                  {card.Name}
                </Typography>
                <Divider />
                <Typography variant="h6" component="h4" paddingTop={4}>
                  Đơn giá: {card.Price}₫
                </Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent>
                <Quantity quantity = {card.Quantity} id = {card.Id} />
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent
                sx={{ cursor: "default", paddingLeft: 3, paddingRight: 4 }}
              >
                <Typography gutterBottom variant="h7" component="h4">
                  Thành tiền
                </Typography>
                <Typography variant="h6" component="h4">
                  {card.Quantity*card.Price}₫
                </Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent sx={{ paddingTop: 7, paddingLeft: 2 }}>
                <Tooltip title="Xóa khỏi giỏ hàng">
                  <IconButton aria-label="filter" color="inherit" onClick={deleteItem(card)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        flexDirection="column"
        marginTop={5}
        paddingLeft={100}
        borderTop={1}
      >
        <Grid item marginTop={2}>
          <Typography variant="h6" component="h4">
            Tổng tiền: {totalPriceOrder(cards)}₫
          </Typography>
        </Grid>
        <Grid item marginTop={5}>
          <Button variant="text" onClick={navigateHome}>
            Tiếp tục mua sắm
          </Button>
          <Button variant="contained" onClick={navigateCheckout}>
            Thanh toán
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartContent;
