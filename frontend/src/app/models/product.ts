export class Product {

    constructor(id = '', reference = '', name = '', price = 0) {
        this.id = id;
        this.reference = reference;
        this.name = name;
        this.price = price;
    }

    id: string;
    reference: string;    
    name: string;    
    price: number;
}
