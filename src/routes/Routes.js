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
import ModifyLaptop from "../pages/dashboard/ModifyLaptop"

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Homepage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/laptop/:page" element={<Laptop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/laptop/:page" element={<ModifyLaptop />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
