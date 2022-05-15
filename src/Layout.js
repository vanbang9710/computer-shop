import React from "react";
import MainRoutes from "./routes/Routes.js";

import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainRoutes />
        </ThemeProvider>
    );
};

export default Layout;
