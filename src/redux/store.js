import { configureStore } from "@reduxjs/toolkit";
import laptopGetReducer from "./laptopGetSlice";
import laptopInfoReducer from "./laptopInfoSlice"
import laptopCreateReducer from "./laptopCreateSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        laptopGetAll: laptopGetReducer,
        laptopInfo: laptopInfoReducer,
        laptopCreate: laptopCreateReducer,
    }
});