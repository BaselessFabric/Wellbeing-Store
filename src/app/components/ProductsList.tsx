import React from "react";
import Product from "./Product";

interface Props {}

const ProductsList: React.FC<Props> = (props) => {
    const products = [
        {
            name: "Product 1",
            price: 100,
            image: "/images/elixir.webp",
        },
        {
            name: "Product 2",
            price: 200,
            image: "/images/elixir2.webp",
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                marginLeft: "200px",
                marginRight: "200px",
                marginTop: "50px",
                marginBottom: "50px",
                justifyContent: "space-between",
            }}
        >
            {/* <h1>Products</h1> */}

            {products.map((product, index) => (
                // <li key={index}>
                //     {product.name} - {product.price}
                // </li>
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductsList;
