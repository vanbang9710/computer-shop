import { createSlice } from "@reduxjs/toolkit";

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