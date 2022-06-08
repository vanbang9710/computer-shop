import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../redux/orderSlice";

export default function Orders() {
  const rows = useSelector((state) => state.order.info);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // GET Request.
    fetch("https://computer-shop-beztdonkey.herokuapp.com/api/orders", {
      mode: "cors",
    })
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((data) => {
        dispatch(getAllOrder(data));
      }) //print data to console
      .catch((err) => console.log(err)); // Catch errors
  }, [dispatch]);

  return (
    <React.Fragment>
      <Title>Các đơn hàng gần đây</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày tạo đơn</TableCell>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Địa điểm giao hàng</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell align="right">Trạng thái đơn hàng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {console.log(row.firstName)}
              <TableCell>{row.orderDate}</TableCell>
              <TableCell>{row.firstName + " " + row.lastName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell align="right">{row.orderStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
