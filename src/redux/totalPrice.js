import { createSlice } from "@reduxjs/toolkit";

export const totalPrice = createSlice({
    name: "price",
    initialState: {
        totalPrice: 0,
    },
    reducers: {
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
    }
})

export const { updateTotalPrice } = totalPrice.actions;
export default totalPrice.reducer;