import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light"
    },
    breakpoints: {
        values: {
            xs: 0,
            axs: 400,
            sm: 600,
            asm: 800,
            md: 900,
            amd: 1000,
            lg: 1200,
            xl: 1536,
            axl: 1800
        },
    },
});