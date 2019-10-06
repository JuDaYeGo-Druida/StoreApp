import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    selectedProducto: Product;
    products: Product[];
    readonly URL_API = 'http://localhost:3000/api/products';

    constructor(private http: HttpClient) {
        this.selectedProducto = new Product();
    }

    //Methods
    getProduct() {
        return this.http.get(this.URL_API);
    }       

    addProduct(product: Product) {
        return this.http.post(this.URL_API, product);
    }

    deleteProduct(id: string) {
        return this.http.delete(this.URL_API + `/${id}`);
    }

    updateProduct(product: Product) {
        return this.http.put(this.URL_API + `/${product.id}`, product);
    }
}
