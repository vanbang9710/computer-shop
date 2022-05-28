import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export default function AddressForm() {
  const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName")||"");
  const [lastName, setLastName] = useState(sessionStorage.getItem("lastName")||"");
  const [phone, setPhone] = useState(sessionStorage.getItem("phone")||"");
  const [email, setEmail] = useState(sessionStorage.getItem("email")||"");
  const [address, setAddress] = useState(sessionStorage.getItem("address")||"");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Địa chỉ giao hàng
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Họ và tên đệm người nhận"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => {
              setFirstName(e.target.value);
              sessionStorage.setItem("firstName", e.target.value);
            }}
            defaultValue={firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Tên người nhận"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => {
              setLastName(e.target.value);
              sessionStorage.setItem("lastName", e.target.value);
            }}
            defaultValue={lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Số điện thoại"
            fullWidth
            autoComplete="phone"
            variant="standard"
            onChange={(e) => {
              setPhone(e.target.value);
              sessionStorage.setItem("phone", e.target.value);
            }}
            defaultValue={phone}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
              sessionStorage.setItem("email", e.target.value);
            }}
            defaultValue={email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Địa chỉ giao hàng"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => {
              setAddress(e.target.value)
              sessionStorage.setItem("address", e.target.value);
            }}
            defaultValue={address}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
