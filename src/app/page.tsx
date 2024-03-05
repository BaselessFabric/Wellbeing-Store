"use client";
import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

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
