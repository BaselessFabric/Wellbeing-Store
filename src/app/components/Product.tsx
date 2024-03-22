import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

// Define the type for the props that the Product component receives
type Props = {
  onAddToBasket: any; // Function to handle adding the product to the basket
  image: string | undefined; // URL of the product image
  price: any; // Price of the product
  name: string | undefined; // Name of the product
  id: any; // ID of the product
};

// Product component
const Product: React.FC<Props> = (props) => {
  const router = useRouter();

  // Function to navigate to the product detail page
  const navigateToProductDetail = () => {
    router.push(`/products/${props.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Product image */}
      <CardMedia
        component="img"
        sx={{ width: 260 }}
        image={props.image}
        alt={props.name}
        onClick={navigateToProductDetail}
        style={{ cursor: "pointer" }}
      />

      <CardContent>
        {/* Product name */}
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        {/* Product price */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "20px" }}
        >
          Price: {props.price}
        </Typography>
        {/* Button to add the product to the basket */}
        <Button
          onClick={props.onAddToBasket}
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "primary.light" }}
        >
          Add to Basket
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
