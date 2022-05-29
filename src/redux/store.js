import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pageReducer from "./pageSlice";
import badgeReducer from "./badgeSlice";
import laptopGetReducer from "./laptopGetSlice";
import laptopInfoReducer from "./laptopInfoSlice"
import laptopCreateReducer from "./laptopCreateSlice";
import cartContentReducer from "./cartContent";
import totalPriceReducer from "./totalPrice";
import addressReducer from "./addressSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
        badge: badgeReducer,
        laptopGetAll: laptopGetReducer,
        laptopInfo: laptopInfoReducer,
        laptopCreate: laptopCreateReducer,
        cartContent: cartContentReducer,
        price: totalPriceReducer,
        address: addressReducer,
    }
});