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

const cards = [1, 2, 3, 4, 5, 6];

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
          <Grid item key={card} xs={12}>
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
                image="https://hanoicomputercdn.com/media/product/250_62576_laptop_asus_vivobook_m7400qc_18.jpg"
                alt="random"
              />
              <CardContent sx={{ cursor: "default", paddingRight: 5 }}>
                <Typography gutterBottom variant="h7" component="h4">
                  Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W
                </Typography>
                <Divider />
                <Typography variant="h6" component="h4" paddingTop={4}>
                  Đơn giá: 27999000₫
                </Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent>
                <Quantity />
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent
                sx={{ cursor: "default", paddingLeft: 3, paddingRight: 4 }}
              >
                <Typography gutterBottom variant="h7" component="h4">
                  Thành tiền
                </Typography>
                <Typography variant="h6" component="h4">
                  27999000₫
                </Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem />
              <CardContent sx={{ paddingTop: 7, paddingLeft: 2 }}>
                <Tooltip title="Xóa khỏi giỏ hàng">
                  <IconButton aria-label="filter" color="inherit">
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
            Tổng tiền: 27999000₫
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
