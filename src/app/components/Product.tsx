import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = {};

const Product: React.FC<Props> = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                sx={{ width: 260 }}
                image={props.image}
                alt={props.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {`${props.price}`}
                </Typography>
                <Button
                    onClick={props.onAddToBasket}
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: "primary" }}
                >
                    Add to Basket
                </Button>
            </CardContent>
        </Card>
    );
};

export default Product;
