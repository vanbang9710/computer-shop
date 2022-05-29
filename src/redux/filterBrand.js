import { createSlice } from "@reduxjs/toolkit";

export const filterBrand = createSlice({
    name: "manufacturer",
    initialState: {
        name: "Tất cả",
    },
    reducers: {
        updateManufacturer: (state, action) => {
            state.name = action.payload;
        },
    }
})

export const { updateManufacturer } = filterBrand.actions;
export default filterBrand.reducer;