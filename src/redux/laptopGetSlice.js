import { createSlice } from "@reduxjs/toolkit";

const info = {
    name: "",
    thumb: "",
    price: 0,
    manufacturer: "",
    model: "",
    color: "",
    processor: "",
    maxMemory: "",
    graphicProcessor: "",
    hardDrives: "",
    optDrives: "",
    display: "",
    webcam: "",
    audio: "",
    wiredConnection: "",
    wirelessConnection: "",
    ports: "",
    battery: "",
    dimensions: "",
    weight: "",
    os: "",
    accessories: "",
}

export const laptopGetSlice = createSlice({
    name: "laptopGetAll",
    initialState: {
        laptopInfo: [info]
    },
    reducers: {
        getAll: (state, action) => {
            state.laptopInfo = action.payload;
        },
        remove: (state, action) => {
            state.laptopInfo.splice(state.laptopInfo.indexOf(action.payload), 1);
        }
    },
});

export const { getAll, remove } = laptopGetSlice.actions;
export default laptopGetSlice.reducer;