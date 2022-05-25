import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Khách",
        email: "Khách"
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => {
            state.name = "Khách";
            state.email = "anonymous@gmail.com";
        }
    }
})

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;