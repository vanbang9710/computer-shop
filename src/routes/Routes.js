import React from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/home/Homepage";
import Cart from "../pages/Cart";
import NoPage from "../pages/NoPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Laptop from "../pages/home/Laptop";
import Profile from "../pages/Profile";
import Dashboard from "../pages/dashboard/Dashboard";
import LaptopDashboard from "../pages/dashboard/LaptopDashboard"
import ModifyLaptop from "../pages/dashboard/ModifyLaptop";
import Checkout from "../pages/Checkout";

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Homepage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/laptop/:page" element={<Laptop />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/laptop/:page" element={<LaptopDashboard />} />
                <Route path="/dashboard/laptop/modify" element={<ModifyLaptop />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
