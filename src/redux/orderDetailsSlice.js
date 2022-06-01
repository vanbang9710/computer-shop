import { createSlice } from "@reduxjs/toolkit";

const info = {
    orderId: 0,
    productId: 0,
    quantity: 0,
}

export const orderDetailsSlice = createSlice({
    name: "orderDetails",
    initialState: {
        info: [info]
    },
    reducers: {
        updateOrderDetails: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { updateOrderDetails } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;