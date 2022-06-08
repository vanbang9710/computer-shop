import { createSlice } from "@reduxjs/toolkit";

export const laptopInfoSlice = createSlice({
    name: "laptopInfo",
    initialState: {
        info: {
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
        },
    },
    reducers: {
        updateInfo: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { updateInfo } = laptopInfoSlice.actions;
export default laptopInfoSlice.reducer;