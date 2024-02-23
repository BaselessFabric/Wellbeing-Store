import Product from "./ProductClass";

export default class ShoppingBasket {
    private items: {
        getName(): unknown;
        product: Product;
        quantity: number;
    }[] = [];

    addProduct(product: Product, quantity: number = 1) {
        const existingItem = this.items.find(
            (item) => item.product === product
        );
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    getQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    removeProduct(product: Product) {
        this.items = this.items.filter((item) => item.product !== product);
    }

    getItems() {
        return this.items;
    }

    getTotalPrice() {
        return this.items.reduce(
            (total, item) => total + item.product.getPrice() * item.quantity,
            0
        );
    }
}
