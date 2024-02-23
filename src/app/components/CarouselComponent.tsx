"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const CarouselComponent: React.FC = () => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
        },
    ];

    return (
        <div>
            <Carousel interval={10000}>
                <img
                    style={{
                        maxHeight: "50vh",
                        objectFit: "cover",
                        width: "100%",
                        objectPosition: "50% 15%",
                    }}
                    src="/images/promotion.webp"
                ></img>
                <img
                    style={{
                        maxHeight: "50vh",
                        objectFit: "cover",
                        width: "100%",
                        objectPosition: "50% 75%",
                    }}
                    src="/images/yoga.webp"
                ></img>
                <img
                    style={{
                        maxHeight: "50vh",
                        objectFit: "cover",
                        width: "100%",
                        objectPosition: "50% 50%",
                    }}
                    src="/images/utopia.webp"
                ></img>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
