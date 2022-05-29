import { FilterAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateManufacturer } from "../../redux/filterBrand";

const brands = [
  "ACER",
  "APPLE",
  "ASUS",
  "AVITA",
  "CONCEPTD",
  "DELL",
  "FUJITSU",
  "GIGABYTE",
  "HP",
  "LENOVO",
  "LG",
  "MICROSOFT",
  "MSI",
  "ORICO",
  "VGS",
  "Tất cả",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 800,
  width: 1600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    dispatch(updateManufacturer(event.target.value));
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Lọc" sx={{ marginBottom: 1 }} onClick={handleOpen}>
        <IconButton size="large" aria-label="filter" color="inherit">
          <FilterAlt />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hãng sản xuất
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            {brands.map((brand) => (
              <Grid item key={brand} xs={3}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={brand}
                  value={brand}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 50 }}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Filter;
