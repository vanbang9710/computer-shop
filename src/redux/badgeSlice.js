import { createSlice } from "@reduxjs/toolkit";

export const badgeSlice = createSlice({
    name: "badge",
    initialState: {
        quantity: 0,
    },
    reducers: {
        updateBadge: (state, action) => {
            state.quantity = action.payload;
        },
    }
})

export const { updateBadge } = badgeSlice.actions;
export default badgeSlice.reducer;