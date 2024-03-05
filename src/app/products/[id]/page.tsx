"use client";

import React from "react";
import Header from "../../components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/styles/theme";
import { Button, Grid, Typography } from "@mui/material";
// import { Product } from "@/app/types"; // adjust this import to your actual Product type
import { useParams } from "next/navigation";

interface ProductDetailProps {}

export default function ProductDetail({ props }: ProductDetailProps) {
  const params = useParams();
  const param = params.id;

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100%" }}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h5">${product.price}</Typography>
            <Typography variant="body1">{product.description}</Typography> */}
            <Button
              variant="contained"
              color="primary"
              // onClick={() => addToBasket(product)}
            >
              Add to Basket
            </Button>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
