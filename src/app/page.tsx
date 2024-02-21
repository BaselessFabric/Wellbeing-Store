import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import ProductsList from "./components/ProductsList";

export default function Home() {
    return (
        <main>
            <Header />
            <CarouselComponent />
            <ProductsList />
        </main>
    );
}
