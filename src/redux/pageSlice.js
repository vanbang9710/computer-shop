import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        info: {
            pageCount: 1,
            limit: 12,
        }
    },
    reducers: {
        updatePage: (state, action) => {
            state.info = action.payload;
        },
    }
})

export const { updatePage } = pageSlice.actions;
export default pageSlice.reducer;