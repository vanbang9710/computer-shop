import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import AddressForm from "../components/checkout/AddressForm";
import PaymentForm from "../components/checkout/PaymentForm";
import Review from "../components/checkout/Review";
import { theme } from "../theme";
import NavBar from "../components/common/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../redux/updateOrderAPI";
import { updateCartContent } from "../redux/cartContent";
import { updateBadge } from "../redux/badgeSlice";

function Copyright() {
  const navigate = useNavigate();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        B2H
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Địa chỉ giao hàng",
  "Phương thức thanh toán",
  "Xem lại đơn hàng",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const address = useSelector((state) => state.address.info);
  const orderId = useDispatch((state) => state.order.info.id);
  const cartContents = useSelector((state) => state.cartContent.info);
  const dispatch = useDispatch();
  const date = new Date();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  const year = date.getFullYear();
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const order = {
    orderDate: year + "-" + month + "-" + day,
    firstName: address.firstName,
    lastName: address.lastName,
    phone: address.phone,
    email: address.email,
    address: address.address,
    orderStatus: "Chưa giao",
  };
  console.log(order);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      updateOrder(order);

      const orderDetails = [];

      cartContents.map((cart) =>
        orderDetails.push({
          orderId: orderId,
          productId: cart.id,
          quantity: cart.quantity,
        })
      );

      sessionStorage.removeItem("productQuantity");
      sessionStorage.removeItem("orderList");
      dispatch(updateCartContent([]));
      dispatch(updateBadge(0));
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="asm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Thanh toán
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Cảm ơn vì đã đặt hàng!
                </Typography>
                <Typography variant="subtitle1">
                  Chúng tôi sẽ liên hệ với bạn khi hàng được chuyển đến.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Quay lại
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Đặt hàng" : "Tiếp"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
