import React from "react";
import Product from "./Product";
import { fetchProducts, fetchCategories } from "../modal/ProductsDataSQL";
import { basket } from "./Header";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

// Define the Props interface for the ProductsList component
interface Props {
  onAddToBasket: any; // Function to handle adding a product to the basket
  basketContents: any; // Current contents of the basket
  setBasketContents: any; // Function to update the basket contents
}

// ProductsList component displays a list of products
const ProductsList: React.FC<Props> = (props: Props) => {
  // Function to handle adding a product to the basket
  const handleAddToBasket = (product: any) => {
    basket.addProduct(product);
  };

  const [products, setProducts] = React.useState<any>([]);
  const [categories, setCategories] = React.useState<any>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);

  React.useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
    fetchCategories().then((categories) => setCategories(categories));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product: any) => product.category === selectedCategory)
    : products;

  console.log("Categories: ");
  console.log(categories);

  return (
    <>
      {/* Iterate over the categories array and render each category */}
      <div className="flex justify-between flex-wrap max-w-90 m-auto">
        <ButtonGroup
          className="flex justify-between flex-wrap max-w-90 m-auto"
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setSelectedCategory(null)}>All</Button>
          {categories.map((category: string) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "90%",
          margin: "50px auto",
        }}
      >
        {filteredProducts.map((product: any) => (
          <div style={{ margin: "10px" }} key={product.getId()}>
            {/* Render the Product component for each product */}
            <Product
              id={product.getId()} // Pass the id as a prop
              name={product.getName()} // Pass the name as a prop
              price={product.getPrice()} // Pass the price as a prop
              image={product.getImage()} // Pass the image as a prop
              onAddToBasket={() => handleAddToBasket(product)} // Pass the handleAddToBasket function as a prop
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
