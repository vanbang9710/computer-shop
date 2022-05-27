import { createSlice } from "@reduxjs/toolkit";

export const laptopSlice = createSlice({
    name: "laptop",
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
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.info = action.payload;
        },
        updateError: (state) => {
            state.pending = false;
            state.error = true;
        }
    },
});

export const { updateStart, updateSuccess, updateError } = laptopSlice.actions;
export default laptopSlice.reducer;