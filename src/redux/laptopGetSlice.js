import { createSlice } from "@reduxjs/toolkit";

let info = {
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
        }
    },
});

export const { getAll } = laptopGetSlice.actions;
export default laptopGetSlice.reducer;