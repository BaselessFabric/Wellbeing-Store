import ProductClass from "./ProductClass";

export function fetchProducts(): Promise<ProductClass[]> {
  return fetch("http://localhost:3001/api/products")
    .then((response) => response.json())
    .then((data) =>
      data.map(
        (product: any) =>
          new ProductClass(
            product.product_id,
            product.image,
            product.name,
            product.desc,
            parseFloat(product.price)
          )
      )
    );
}

export function fetchCategories(): Promise<string[]> {
  return fetch("http://localhost:3001/api/categories")
    .then((response) => response.json())
    .then((data) => data.map((category: any) => category.category_name));
}
