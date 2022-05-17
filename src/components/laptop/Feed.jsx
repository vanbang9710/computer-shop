import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import PaginationLink from "../Pagination";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Feed = () => {
  return (
    <Container sx={{ py: 18 }} maxWidth="lg">
      {/* End hero unit */}
      <PaginationLink />
      <Grid container spacing={7} paddingLeft={7}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={4} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "4.25%",
                }}
                image="https://hanoicomputercdn.com/media/product/250_62576_laptop_asus_vivobook_m7400qc_18.jpg"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed;
