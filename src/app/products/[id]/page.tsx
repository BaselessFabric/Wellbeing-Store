"use client";

import React from "react";
import Header from "../../components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/styles/theme";
import { Button, Grid, Typography, Container, Card } from "@mui/material";
// import { Product } from "@/app/types"; // adjust this import to your actual Product type
import { useParams } from "next/navigation";
import products from "@/app/modal/ProductsData";
import Image from "next/image";
import { basket } from "../../components/Header";

interface ProductDetailProps {}

export default function ProductDetail({ props }: ProductDetailProps) {
  const params = useParams();
  const param = Number(params.id);

  const product = products.find((product) => product.getId() === param);

  const handleAddToBasket = (product) => {
    basket.addProduct(product);
  };

  // console.log(product);

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Container maxWidth="md" className="mt-3">
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Image
                  src={product.getImage()}
                  alt={`An image of the ${product.getName()}`}
                  // style={{ width: "100%" }}
                  width={500}
                  height={500}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography className="mt-3 mx-3" variant="h4">
                  {product.getName()}
                </Typography>
                <Typography className="mt-3 mx-3" variant="h5">
                  {product.getPrice()}
                </Typography>
                <Typography className="mt-3 mx-3" variant="body1">
                  {product.getDesc()}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToBasket(product)}
                  className="mt-3 m-3"
                >
                  Add to Basket
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </main>
    </ThemeProvider>
  );
}
