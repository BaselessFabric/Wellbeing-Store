import React from "react";
import Product from "./Product";
import products from "../modal/ProductsData";
import { basket } from "./Header";

interface Props {}

const ProductsList: React.FC<Props> = (props) => {
    const handleAddToBasket = (product) => {
        basket.addProduct(product);
    };

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
                    onAddToBasket={() => handleAddToBasket(product)}
                />
            ))}
        </div>
    );
};

export default ProductsList;
