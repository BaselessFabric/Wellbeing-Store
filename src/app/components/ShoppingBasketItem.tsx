import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import image from "next/image";

interface Props {}

const ShoppingBasketItem: React.FC<Props> = (props) => {
    return (
        <Card sx={{ display: "flex", marginBottom: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 140 }}
                // image={image}
                // alt={name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="h5" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Price: {props.price}
                    </Typography>
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
