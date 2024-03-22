/**
 * Represents a product in the WellBeing Store.
 */
export default class Product {
  private id: number; // The unique identifier of the product.
  private image: string; // The URL of the product image.
  private name: string; // The name of the product.
  private desc: string; // The description of the product.
  private price: number; // The price of the product.

  /**
   * Creates a new instance of the Product class.
   * @param id - The unique identifier of the product.
   * @param image - The URL of the product image.
   * @param name - The name of the product.
   * @param desc - The description of the product.
   * @param price - The price of the product.
   */
  constructor(
    id: number,
    image: string,
    name: string,
    desc: string,
    price: number
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }

  // Getters and setters

  /**
   * Gets the unique identifier of the product.
   * @returns The unique identifier of the product.
   */
  getId(): number {
    return this.id;
  }

  /**
   * Gets the name of the product.
   * @returns The name of the product.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the description of the product.
   * @returns The description of the product.
   */
  getDesc(): string {
    return this.desc;
  }

  /**
   * Gets the price of the product.
   * @returns The price of the product in the format £X.XX.
   */
  getPrice(): string {
    if (typeof this.price === "number") {
      const num = Number.parseFloat(this.price.toFixed(2));
      return `£${num}`;
    } else {
      // throw new Error(
      //   `Expected price to be a number, but received ${typeof this.price}`
      // );
      console.log(typeof this.price);
      return "hello";
    }
  }

  getNumericalPrice(): number {
    return this.price;
  }

  /**
   * Gets the URL of the product image.
   * @returns The URL of the product image.
   */
  getImage(): string {
    return this.image;
  }

  /**
   * Sets the unique identifier of the product.
   * @param id - The unique identifier of the product.
   */
  setId(id: number): void {
    this.id = id;
  }

  /**
   * Sets the name of the product.
   * @param name - The name of the product.
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Sets the description of the product.
   * @param desc - The description of the product.
   */
  setDesc(desc: string): void {
    this.desc = desc;
  }

  /**
   * Sets the price of the product.
   * @param price - The price of the product.
   */
  setPrice(price: number): void {
    this.price = price;
  }
}
