"use client";
import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
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

export default function Home() {
    const [basketContents, setBasketContents] = useState([]);

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Header
                    basketContents={basketContents}
                    setBasketContents={setBasketContents}
                />
                <CarouselComponent />
                <ProductsList
                    basketContents={basketContents}
                    setBasketContents={setBasketContents}
                />
            </main>
        </ThemeProvider>
    );
}
