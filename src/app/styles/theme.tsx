"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#efefef",
          // color: "red",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#88bdbc",
      light: "#a3c3d9",
      dark: "#5b84b1",
    },
    secondary: {
      main: "#f5d042",
    },
  },
});
