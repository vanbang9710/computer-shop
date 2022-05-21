import { ShoppingCart } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import PaginationLink from "../Pagination";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Feed = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container sx={{ py: 18 }} maxWidth="lg">
      {/* End hero unit */}
      <PaginationLink />
      <Grid container spacing={7} paddingLeft={7}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CardActionArea>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "6.25%",
                  }}
                  image="https://hanoicomputercdn.com/media/product/250_62576_laptop_asus_vivobook_m7400qc_18.jpg"
                  alt="random"
                  onClick={handleClick}
                />
                <CardContent sx={{ cursor: "default" }}>
                  <Typography gutterBottom variant="h7" component="h4">
                    Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W
                  </Typography>
                </CardContent>
                <CardActions sx={{ cursor: "default" }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ marginLeft: 1 }}
                  >
                    27999000₫
                  </Typography>
                  <Tooltip title="Thêm vào giỏ">
                    <IconButton sx={{ marginLeft: 20 }}>
                      <ShoppingCart />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ width: 400 }}
      >
        <Typography sx={{ p: 2 }}>Manufacturer: Asus</Typography>
        <Typography sx={{ p: 2 }}>Model: M7400QC-KM013W</Typography>
        <Typography sx={{ p: 2 }}>Color: 0°Black</Typography>
        <Typography sx={{ p: 2 }}>
          Processor: AMD Ryzen™ 5 5600H Mobile Processor (6-core/12-thread, 19MB
          cache, up to 4.2 GHz max boost)
        </Typography>
        <Typography sx={{ p: 2 }}>MaxMemory: 16GB</Typography>
        <Typography sx={{ p: 2 }}>
          GraphicProcessor: "NVIDIA® GeForce® RTX™ 3050 Laptop GPU
        </Typography>
      </Popover>
    </Container>
  );
};

export default Feed;
