import { ShoppingCart } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import PaginationLink from "../Pagination";
import Filter from "../../common/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/laptopGetSlice";
import { updateInfo } from "../../../redux/laptopInfoSlice";
import { useEffect } from "react";
import { updateBadge } from "../../../redux/badgeSlice";
import { updateCartContent } from "../../../redux/cartContent";

const Category = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  //const [orderList, setOrderList] = React.useState([]||sessionStorage.getItem("orderList"));
  let orderList = JSON.parse(sessionStorage.getItem("orderList")) || [];
  let productQuantity = sessionStorage.getItem("productQuantity") || 0;

  const clickOrder = (card) => {
    let duplicate = false;
    let choiceName = card.name;
    let productId = card.id;

    for (let j = 0; j < orderList.length && duplicate === false; j++) {
      if (orderList[j].id === productId) {
        orderList[j].quantity++;
        productQuantity++;
        orderList[j].id = productId;
        duplicate = true;
      }
    }

    // Push new choice to orderList.
    if (duplicate === false) {
      let choice = [
        {
          id: productId,
          name: choiceName,
          price: card.price,
          thumb: card.thumb,
          quantity: 1,
        },
      ];
      orderList = orderList.concat(choice);
      productQuantity++;
    }

    dispatch(updateBadge(productQuantity));

    // Update sessionStorage.
    sessionStorage.setItem("orderList", JSON.stringify(orderList));
    sessionStorage.setItem("productQuantity", productQuantity);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = () => {
    const carts = JSON.parse(sessionStorage.getItem("orderList")) || [];
    dispatch(updateCartContent(carts));
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const cards = useSelector((state) => state.laptopGetAll.laptopInfo);
  const cardInfo = useSelector((state) => state.laptopInfo.info);
  const page = useSelector((state) => state.page.info);
  const manufacturer = useSelector((state) => state.manufacturer.name);

  let url = "";
  if (
    manufacturer === "Tất cả" ||
    manufacturer === undefined ||
    manufacturer === null
  ) {
    url =
      "https://computer-shop-beztdonkey.herokuapp.com/api/products?limit=" +
      page.limit +
      "&offset=" +
      (page.pageCount - 1) * page.limit;
  } else {
    url =
      "https://computer-shop-beztdonkey.herokuapp.com/api/products?manufacturer=" +
      manufacturer +
      "&limit=" +
      page.limit +
      "&offset=" +
      (page.pageCount - 1) * page.limit;
  }

  console.log(url);

  useEffect(() => {
    // GET Request.
    fetch(url, {
      mode: "cors",
    })
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((data) => {
        dispatch(getAll(data));
      }) //print data to console
      .catch((err) => console.log(err)); // Catch errors
  }, [dispatch, page.pageCount, page.limit, manufacturer, url]);

  return (
    <Container sx={{ py: 18 }} maxWidth="lg">
      {/* End hero unit */}
      <Container sx={{ marginBottom: 5 }}>
        <Grid container spacing={7}>
          <Grid item xs={4}>
            <Filter />
          </Grid>
          <Grid item xs={8}>
            <PaginationLink />
          </Grid>
        </Grid>
        <Divider />
      </Container>
      <Grid container spacing={7}>
        {cards.map((card) => (
          <Grid item key={card.name} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "6.25%",
                  }}
                  image={card.thumb}
                  alt="random"
                  onClick={(event) => {
                    handleClick(event);
                    dispatch(updateInfo(card));
                  }}
                />
                <CardContent sx={{ cursor: "default" }}>
                  <Typography gutterBottom variant="h7" component="h4">
                    {card.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ cursor: "default" }}>
                <Typography variant="h6" component="h4" sx={{ marginLeft: 1 }}>
                  {card.price}₫
                </Typography>
                <Tooltip title="Thêm vào giỏ">
                  <IconButton
                    sx={{ marginLeft: 22 }}
                    onClick={() => {
                      clickOrder(card);
                      handleChange();
                    }}
                  >
                    <ShoppingCart />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
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
        PaperProps={{ style: { width: "400px" } }}
      >
        {Object.keys(cardInfo)
          .filter(
            (key) =>
              key !== "id" &&
              key !== "name" &&
              key !== "thumb" &&
              key !== "price" &&
              key !== "quantity"
          )
          .map((keyName, keyIndex) => {
            return (
              <div>
                <Typography sx={{ p: 1 }}>
                  {capitalizeFirstLetter(keyName)}:{" "}
                  {cardInfo[keyName] ? cardInfo[keyName] : ""}
                </Typography>
                <Divider />
              </div>
            );
          })}
      </Popover>
    </Container>
  );
};

export default Category;
