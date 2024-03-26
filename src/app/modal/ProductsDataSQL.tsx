import ProductClass from "./ProductClass";

export function fetchProducts(): Promise<ProductClass[]> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
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
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
    .then((response) => response.json())
    .then((data) => data.map((category: any) => category.category_name));
}
