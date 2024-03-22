"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

/**
 * Renders a carousel component with images.
 * @returns The CarouselComponent.
 */
const CarouselComponent = () => {
  return (
    <div>
      {/* sets the time in miliseconds between each image change */}
      <Carousel interval={10000}>
        {/* below is a list of images that the carousel cycles through, each one individually styled */}
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
