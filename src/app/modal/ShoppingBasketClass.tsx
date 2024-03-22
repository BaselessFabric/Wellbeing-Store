import Product from "./ProductClass";

/**
 * Represents a shopping basket.
 */
export default class ShoppingBasket {
  private items: {
    name: any;
    price: any;
    product: Product;
    quantity: number;
  }[] = [];

  /**
   * Adds a product to the shopping basket.
   * @param product - The product to add.
   * @param quantity - The quantity of the product to add (default: 1).
   */
  addProduct(product: Product, quantity: number = 1) {
    const existingItem = this.items.find((item) => item.product === product);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        product,
        quantity,
        name: undefined,
        price: undefined,
      });
    }
  }

  /**
   * Returns the total quantity of items in the shopping basket.
   * @returns The total quantity of items.
   */
  getQuantity() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Removes a product from the shopping basket.
   * @param product - The product to remove.
   * @param quantity - The quantity of the product to remove (default: 1).
   */
  removeProduct(product: Product, quantity: number = 1) {
    const existingItem = this.items.find((item) => item.product === product);
    if (existingItem) {
      if (existingItem.quantity > quantity) {
        existingItem.quantity -= quantity;
      } else {
        this.items = this.items.filter((item) => item.product !== product);
      }
    }
  }

  /**
   * Returns the items in the shopping basket.
   * @returns The items in the shopping basket.
   */
  getItems() {
    return this.items;
  }

  /**
   * Returns the total quantity of all items in the shopping basket.
   * @returns The total quantity of all items.
   */
  getTotalItemQuantity() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Returns the total price of all items in the shopping basket.
   * @returns The total price of all items.
   */
  getTotalPrice() {
    return `£${this.items.reduce(
      (total, item) => total + item.product.getNumericalPrice() * item.quantity,
      0
    )}`;
  }
}
