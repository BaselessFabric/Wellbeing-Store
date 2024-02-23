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
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "90%",
                margin: "50px auto",
            }}
        >
            {/* <h1>Products</h1> */}

            {products.map((product, index) => (
                // <li key={index}>
                //     {product.name} - {product.price}
                // </li>
                <div style={{ margin: "10px" }}>
                    <Product
                        key={index}
                        name={product.name}
                        price={product.getPrice()}
                        image={product.image}
                        onAddToBasket={() => handleAddToBasket(product)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
