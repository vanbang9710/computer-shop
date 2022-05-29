import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { passInfo } from "../../../redux/laptopCreateSlice";
import { updateLaptop } from "../../../redux/createAPI";
import { Alert, Snackbar } from "@mui/material";

export default function SignUp() {
  const cardInfo = useSelector((state) => state.laptopInfo.info);
  const dispatch = useDispatch();
  dispatch(passInfo(cardInfo));
  const { info, pending, error } = useSelector((state) => state.laptopCreate);

  const [name, setName] = React.useState(info.name);
  const [price, setPrice] = React.useState(info.price);
  const [manufacturer, setManufacturer] = React.useState(info.manufacturer);
  const [model, setModel] = React.useState(info.model);
  const [color, setColor] = React.useState(info.color);
  const [processor, setProcessor] = React.useState(info.processor);
  const [maxMemory, setMaxMemory] = React.useState(info.maxMemory);
  const [graphicProcessor, setGraphicProcessor] = React.useState(
    info.graphicProcessor
  );
  const [hardDrives, setHardDrives] = React.useState(info.hardDrives);
  const [optDrives, setOptDrives] = React.useState(info.optDrives);
  const [display, setDisplay] = React.useState(info.display);
  const [webcam, setWebcam] = React.useState(info.webcam);
  const [audio, setAudio] = React.useState(info.audio);
  const [wiredConnection, setWiredConnection] = React.useState(
    info.wiredConnection
  );
  const [wirelessConnection, setWirelessConnection] = React.useState(
    info.wirelessConnection
  );
  const [ports, setPorts] = React.useState(info.ports);
  const [battery, setBattery] = React.useState(info.battery);
  const [dimensions, setDimensions] = React.useState(info.dimensions);
  const [weight, setWeight] = React.useState(info.weight);
  const [os, setOS] = React.useState(info.os);
  const [accessories, setAccessories] = React.useState(info.accessories);
  const [thumb, setThumb] = React.useState(info.thumb);
  const [quantity, setQuantity] = React.useState(info.quantity);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    const newInfo = {
      name,
      price,
      manufacturer,
      model,
      color,
      processor,
      maxMemory,
      graphicProcessor,
      hardDrives,
      optDrives,
      display,
      webcam,
      audio,
      wiredConnection,
      wirelessConnection,
      ports,
      battery,
      dimensions,
      weight,
      os,
      accessories,
      thumb,
      quantity,
    };
    if (
      cardInfo.name !== "" &&
      cardInfo.name !== undefined &&
      cardInfo !== null
    ) {
      updateLaptop(newInfo, dispatch, "PUT", cardInfo.id);
    } else {
      updateLaptop(newInfo, dispatch, "POST", -1);
    }
  };

  return (
    <Container component="main" maxWidth="amd">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5">
          Sản phẩm
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                placeholder="Name"
                defaultValue={info.name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="price"
                name="price"
                required
                fullWidth
                id="price"
                label="Price"
                placeholder="Price"
                defaultValue={info.price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="manufacturer"
                name="manufacturer"
                required
                fullWidth
                id="manufacturer"
                label="Manufacturer"
                placeholder="Manufacturer"
                defaultValue={info.manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="model"
                name="model"
                fullWidth
                id="model"
                label="Model"
                placeholder="Model"
                defaultValue={info.model}
                onChange={(event) => setModel(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="color"
                name="color"
                fullWidth
                id="color"
                label="Color"
                placeholder="Color"
                defaultValue={info.color}
                onChange={(event) => setColor(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="processor"
                name="processor"
                fullWidth
                id="processor"
                label="Processor"
                placeholder="Processor"
                defaultValue={info.processor}
                onChange={(event) => setProcessor(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="maxMemory"
                name="maxMemory"
                fullWidth
                id="maxMemory"
                label="MaxMemory"
                placeholder="MaxMemory"
                defaultValue={info.maxMemory}
                onChange={(event) => setMaxMemory(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="graphicProcessor"
                name="graphicProcessor"
                fullWidth
                id="graphicProcessor"
                label="GraphicProcessor"
                placeholder="GraphicsProcessor"
                defaultValue={info.graphicProcessor}
                onChange={(event) => setGraphicProcessor(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="hardDrives"
                name="hardDrives"
                fullWidth
                id="hardDrives"
                label="HardDrives"
                placeholder="HardDrives"
                defaultValue={info.hardDrives}
                onChange={(event) => setHardDrives(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="optDrives"
                name="optDrives"
                fullWidth
                id="optDrives"
                label="OptDrives"
                placeholder="OptDrives"
                defaultValue={info.optDrives}
                onChange={(event) => setOptDrives(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="display"
                name="display"
                fullWidth
                id="display"
                label="Display"
                placeholder="Display"
                defaultValue={info.display}
                onChange={(event) => setDisplay(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="webcam"
                name="webcam"
                fullWidth
                id="webcam"
                label="Webcam"
                placeholder="Webcam"
                defaultValue={info.webcam}
                onChange={(event) => setWebcam(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="audio"
                name="audio"
                fullWidth
                id="audio"
                label="Audio"
                placeholder="Audio"
                defaultValue={info.audio}
                onChange={(event) => setAudio(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="wiredConnection"
                name="wiredConnection"
                fullWidth
                id="wiredConnection"
                label="WiredConnection"
                placeholder="WiredConnection"
                defaultValue={info.wiredConnection}
                onChange={(event) => setWiredConnection(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="wirelessConnection"
                name="wirelessConnection"
                fullWidth
                id="wirelessConnection"
                label="WirelessConnection"
                placeholder="WirelessConnection"
                defaultValue={info.wirelessConnection}
                onChange={(event) => setWirelessConnection(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="ports"
                name="ports"
                fullWidth
                id="ports"
                label="Ports"
                placeholder="Ports"
                defaultValue={info.ports}
                onChange={(event) => setPorts(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="battery"
                name="battery"
                fullWidth
                id="battery"
                label="Battery"
                placeholder="Battery"
                defaultValue={info.battery}
                onChange={(event) => setBattery(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="dimensions"
                name="dimensions"
                fullWidth
                id="dimensions"
                label="Dimensions"
                placeholder="Dimensions"
                defaultValue={info.dimensions}
                onChange={(event) => setDimensions(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="weight"
                name="weight"
                fullWidth
                id="weight"
                label="Weight"
                placeholder="Weight"
                defaultValue={info.weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="os"
                name="os"
                fullWidth
                id="os"
                label="OS"
                placeholder="OS"
                defaultValue={info.os}
                onChange={(event) => setOS(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="accessories"
                name="accessories"
                fullWidth
                id="accessories"
                label="Accessories"
                placeholder="Accessories"
                defaultValue={info.accessories}
                onChange={(event) => setAccessories(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="thumb"
                name="thumb"
                required
                fullWidth
                id="thumb"
                label="Thumb"
                placeholder="Link"
                defaultValue={info.thumb}
                onChange={(event) => setThumb(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="quantity"
                name="quantity"
                required
                fullWidth
                id="quantity"
                label="Quantity"
                placeholder="Quantity"
                defaultValue={info.quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {error ? (
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Đã xảy ra lỗi!
              </Alert>
            ) : (
              pending === false && (
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Cập nhật thành công!
                </Alert>
              )
            )}
          </Snackbar>
        </Box>
      </Box>
    </Container>
  );
}
