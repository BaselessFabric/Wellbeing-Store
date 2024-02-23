"use client";
import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import ProductsList from "./components/ProductsList";
import { useState } from "react";

export default function Home() {
    const [basketContents, setBasketContents] = useState([]);

    return (
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
    );
}
