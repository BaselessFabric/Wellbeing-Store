import React, { MouseEventHandler, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface Props {
  image: string | undefined;
  name: string | undefined;
  price: ReactNode;
  quantity: ReactNode;
  handleRemoveFromBasket: MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * Represents a shopping basket item component.
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const ShoppingBasketItem: React.FC<Props> = (props) => {
  return (
    // Render a card component
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      {/* Render the card media */}
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={props.image}
        alt={props.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Render the item name */}
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          {/* Render the item price */}
          <Typography variant="subtitle1" color="text.secondary">
            Price: {props.price}
          </Typography>
          {/* Render the item quantity */}
          <Typography variant="subtitle1" color="text.secondary">
            Quantity: {props.quantity}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 1,
            paddingBottom: 1,
          }}
        >
          {/* Render the remove button */}
          <Button
            onClick={props.handleRemoveFromBasket}
            variant="contained"
            color="secondary"
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ShoppingBasketItem;
