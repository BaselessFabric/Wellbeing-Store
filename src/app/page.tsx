import Image from "next/image";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";

export default function Home() {
    return (
        <main>
            <Header />
            <CarouselComponent />
        </main>
    );
}
