import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
    name: "address",
    initialState: {
        info: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
        }
    },
    reducers: {
        updateAddress: (state, action) => {
            state.info = action.payload;
        },
    }
})

export const { updateAddress } = addressSlice.actions;
export default addressSlice.reducer;