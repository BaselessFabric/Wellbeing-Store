import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type Props = {
    // Define your component props here
};

const Product: React.FC<Props> = (props) => {
    // Component logic goes here

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {props.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Product;
