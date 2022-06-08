import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../redux/pageSlice";

export default function BasicPagination() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.info);
  const handleChange = (event, value) => {
    dispatch(updatePage({ pageCount: value, limit: 12 }));
    navigate("/laptop/" + value);
  };
  return (
    <Pagination
      count={Math.floor(500 / 12) + (500 % 12 > 0 ? 1 : 0)}
      color="primary"
      page={page.pageCount}
      onChange={handleChange}
      sx={{ paddingLeft: 45 }}
    />
  );
}
