import { configureStore } from "@reduxjs/toolkit";
import badgeReducer from "./badgeSlice";
import laptopGetReducer from "./laptopGetSlice";
import laptopInfoReducer from "./laptopInfoSlice"
import laptopCreateReducer from "./laptopCreateSlice";
import cartContentReducer from "./cartContent";
import totalPriceReducer from "./totalPrice";
import addressReducer from "./addressSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        badge: badgeReducer,
        laptopGetAll: laptopGetReducer,
        laptopInfo: laptopInfoReducer,
        laptopCreate: laptopCreateReducer,
        cartContent: cartContentReducer,
        price: totalPriceReducer,
        address: addressReducer,
    }
});