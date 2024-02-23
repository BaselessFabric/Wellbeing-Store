export default class Product {
    private id: number;
    private name: string;
    private desc: string;
    private price: number;

    constructor(id: number, name: string, desc: string, price: number) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    // Getters and setters

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDesc(): string {
        return this.desc;
    }

    getPrice(): number {
        return this.price;
    }

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDesc(desc: string): void {
        this.desc = desc;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}
