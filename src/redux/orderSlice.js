import { createSlice } from "@reduxjs/toolkit";

const info = {
    id: 0,
    orderDate: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    orderStatus: "Chưa giao",
}

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        info: [info]
    },
    reducers: {
        getAllOrder: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { getAllOrder } = orderSlice.actions;
export default orderSlice.reducer;