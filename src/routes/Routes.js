import React from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Cart from "../pages/Cart";
import NoPage from "../pages/NoPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Homepage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
