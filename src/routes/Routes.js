import React from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import NoPage from "../pages/NoPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Laptop from "../pages/Laptop";

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Homepage />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="laptop" element={<Laptop />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
