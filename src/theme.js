import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark"
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            asm: 700,
            md: 900,
            amd: 1000,
            lg: 1200,
            xl: 1536,
        },
    },
});