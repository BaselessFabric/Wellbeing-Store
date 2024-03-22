"use client";
import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
export default function Home() {
  // State to store the contents of the basket
  const [basketContents, setBasketContents] = useState<any>([]);

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Render the header component */}
        {/* pass the basket state and set basket state function to header and productList */}
        <Header
          basketContents={basketContents}
          setBasketContents={setBasketContents}
        />
        {/* Render the carousel component */}
        <CarouselComponent />
        {/* Render the products list component */}
        <ProductsList
          basketContents={basketContents}
          setBasketContents={setBasketContents}
          onAddToBasket={undefined}
        />
      </>
    </ThemeProvider>
  );
}
