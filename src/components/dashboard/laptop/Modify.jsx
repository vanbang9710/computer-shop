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

const info = [
  "price",
  "manufacturer",
  "model",
  "color",
  "processor",
  "maxMemory",
  "graphicProcessor",
  "hardDrives",
  "optDrives",
  "display",
  "webcam",
  "audio",
  "wiredConnection",
  "wirelessConnection",
  "ports",
  "battery",
  "dimensions",
  "weight",
  "os",
  "accessories",
];

export default function SignUp() {
  const cardInfo = useSelector((state) => state.laptopInfo.info);
  const dispatch = useDispatch();
  dispatch(passInfo(cardInfo));
  const newCardInfo = useSelector((state) => state.laptopCreate.info);

  const [name, setName] = React.useState(newCardInfo.name);
  const [price, setPrice] = React.useState(newCardInfo.price);
  const [manufacturer, setManufacturer] = React.useState(
    newCardInfo.manufacturer
  );
  const [model, setModel] = React.useState(newCardInfo.model);
  const [color, setColor] = React.useState(newCardInfo.color);
  const [processor, setProcessor] = React.useState(newCardInfo.processor);
  const [maxMemory, setMaxMemory] = React.useState(newCardInfo.maxMemory);
  const [graphicProcessor, setGraphicProcessor] = React.useState(
    newCardInfo.graphicProcessor
  );
  const [hardDrives, setHardDrives] = React.useState(newCardInfo.hardDrives);
  const [optDrives, setOptDrives] = React.useState(newCardInfo.optDrives);
  const [display, setDisplay] = React.useState(newCardInfo.display);
  const [webcam, setWebcam] = React.useState(newCardInfo.webcam);
  const [audio, setAudio] = React.useState(newCardInfo.audio);
  const [wiredConnection, setWiredConnection] = React.useState(
    newCardInfo.wiredConnection
  );
  const [wirelessConnection, setWirelessConnection] = React.useState(
    newCardInfo.wirelessConnection
  );
  const [ports, setPorts] = React.useState(newCardInfo.ports);
  const [battery, setBattery] = React.useState(newCardInfo.battery);
  const [dimension, setDimension] = React.useState(newCardInfo.dimensions);
  const [weight, setWeight] = React.useState(newCardInfo.weight);
  const [os, setOS] = React.useState(newCardInfo.os);
  const [accessories, setAccessories] = React.useState(newCardInfo.accessories);
  const [thumb, setThumb] = React.useState(newCardInfo.thumb);

  const handleSubmit = (event) => {
    event.preventDefault();
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
      dimension,
      weight,
      os,
      accessories,
      thumb,
    };
    updateLaptop(newInfo, dispatch);
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
                defaultValue={newCardInfo.name}
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
                defaultValue={newCardInfo.price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="manufacturer"
                name="manufacturer"
                fullWidth
                id="manufacturer"
                label="Manufacturer"
                placeholder="Manufacturer"
                defaultValue={newCardInfo.manufacturer}
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
                defaultValue={newCardInfo.model}
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
                defaultValue={newCardInfo.color}
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
                defaultValue={newCardInfo.processor}
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
                defaultValue={newCardInfo.maxMemory}
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
                defaultValue={newCardInfo.graphicProcessor}
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
                defaultValue={newCardInfo.hardDrives}
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
                defaultValue={newCardInfo.optDrives}
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
                defaultValue={newCardInfo.display}
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
                defaultValue={newCardInfo.webcam}
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
                defaultValue={newCardInfo.audio}
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
                defaultValue={newCardInfo.wiredConnection}
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
                defaultValue={newCardInfo.wirelessConnection}
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
                defaultValue={newCardInfo.ports}
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
                defaultValue={newCardInfo.battery}
                onChange={(event) => setBattery(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="dimension"
                name="dimension"
                fullWidth
                id="dimension"
                label="Dimension"
                placeholder="Dimension"
                defaultValue={newCardInfo.dimension}
                onChange={(event) => setDimension(event.target.value)}
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
                defaultValue={newCardInfo.weight}
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
                defaultValue={newCardInfo.os}
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
                defaultValue={newCardInfo.accessories}
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
                defaultValue={newCardInfo.thumb}
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
        </Box>
      </Box>
    </Container>
  );
}
