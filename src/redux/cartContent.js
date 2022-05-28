import { createSlice } from "@reduxjs/toolkit";

const info = {
    id: 0,
    name: "",
    thumb: "",
    price: 0,
    quantity: 0,
}

export const cartContent = createSlice({
    name: "cartContent",
    initialState: {
        info: [],
    },
    reducers: {
        updateCartContent: (state, action) => {
            state.info = action.payload;
        },
    }
})

export const { updateCartContent } = cartContent.actions;
export default cartContent.reducer;