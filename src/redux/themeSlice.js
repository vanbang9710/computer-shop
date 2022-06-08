import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: "light",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.mode = action.payload;
        },
    }
})

export const { changeTheme } = themeSlice.actions;
export const getMode = (state) => {
    return state.theme.mode;
}
export default themeSlice.reducer;