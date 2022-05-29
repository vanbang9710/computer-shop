import { Delete, Mode } from "@mui/icons-material";
import {
  ButtonGroup,
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
import React, { useEffect } from "react";
import PaginationLink from "../PaginationDashboard";
import Filter from "../../common/Filter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/laptopGetSlice";
import { updateInfo } from "../../../redux/laptopInfoSlice";

const Category = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard/laptop/modify");
  };

  const cards = useSelector((state) => state.laptopGetAll.laptopInfo);
  const cardInfo = useSelector((state) => state.laptopInfo.info);
  const page = useSelector((state) => state.page.info);
  const dispatch = useDispatch();
  useEffect(() => {
    // GET Request.
    fetch(
      "http://localhost:3001/api/products?limit=" +
        page.limit +
        "&offset=" +
        (page.pageCount - 1) * page.limit,
      {
        mode: "cors",
      }
    )
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((data) => {
        dispatch(getAll(data));
      }) //print data to console
      .catch((err) => console.log(err)); // Catch errors
  }, [dispatch, page.pageCount, page.limit]);

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
                <ButtonGroup variant="text" sx={{ marginLeft: 17 }}>
                  <Tooltip title="Sửa thông tin">
                    <IconButton
                      onClick={(event) => {
                        handleNavigate();
                        dispatch(updateInfo(card));
                      }}
                    >
                      <Mode />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Xóa sản phẩm">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </ButtonGroup>
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
              key !== "price"
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
