import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
type Props = {};

const Product: React.FC<Props> = (props) => {
  const router = useRouter();

  const navigateToProductDetail = () => {
    router.push(`/products/${props.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ width: 260 }}
        image={props.image}
        alt={props.name}
        onClick={navigateToProductDetail}
        style={{ cursor: "pointer" }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "20px" }}
        >
          Price: {props.price}
        </Typography>
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
