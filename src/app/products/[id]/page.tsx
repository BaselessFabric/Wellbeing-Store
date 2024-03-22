"use client";

import React from "react";
import Header from "../../components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/styles/theme";
import { Button, Grid, Typography, Container, Card } from "@mui/material";
import { useParams } from "next/navigation";
import products from "@/app/modal/ProductsData";
import Image from "next/image";
import { basket } from "../../components/Header";
import Product from "@/app/modal/ProductClass";

interface ProductDetailProps {}

/**
 * Component for displaying the details of a product.
 *
 * @param {} ProductDetailProps - The props for the ProductDetail component.
 * @returns {JSX.Element} - The rendered ProductDetail component.
 */
export default function ProductDetail({}: ProductDetailProps) {
  const params = useParams();
  const param = Number(params.id);

  // Find the product with the matching ID
  const product = products.find((product) => product.getId() === param);

  /**
   * Event handler for adding a product to the basket.
   *
   * @param {Product} product - The product to be added to the basket.
   */
  const handleAddToBasket = (product: any) => {
    basket.addProduct(product);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Render the Header component */}
        <Header basketContents={undefined} setBasketContents={undefined} />
        <Container maxWidth="md" className="mt-3">
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                {/* Render the product image */}
                <Image
                  src={product?.getImage() ?? ""}
                  alt={`An image of the ${product?.getName()}`}
                  width={500}
                  height={500}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                {/* Render the product name, check not null */}
                <Typography className="mt-3 mx-3" variant="h4">
                  {product && product.getName()}
                </Typography>
                {/* Render the product price, check not null */}
                {product && (
                  <Typography className="mt-3 mx-3" variant="h5">
                    {product.getPrice()}
                  </Typography>
                )}
                {/* Render the product description */}
                <Typography className="mt-3 mx-3" variant="body1">
                  {product?.getDesc()}
                </Typography>
                {/* Render the "Add to Basket" button */}
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
