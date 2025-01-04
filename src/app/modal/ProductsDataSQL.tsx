import ProductClass from "./ProductClass";

export async function fetchProducts(): Promise<ProductClass[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map(
      (product: any) =>
        new ProductClass(
          product.product_id,
          product.image,
          product.name,
          product.desc,
          parseFloat(product.price),
        )
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> { 
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
    if (!response.ok) {
        throw new Error(`HTTP error fetching categories! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((category: any) => category.category_name);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; 
  }
}

