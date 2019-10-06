import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
    selectedDelivery: Delivery;
    deliveries: Delivery[];
    readonly URL_API = 'http://localhost:3000/api/deliveries';

    constructor(private http: HttpClient) {
        this.selectedDelivery = new Delivery();
    }

    //Methods
    getDeliveries() {
        return this.http.get(this.URL_API);
    }

    addDelivery(delivery: Delivery) {
        return this.http.post(this.URL_API, delivery);
    }

    deleteDelivery(id: string) {
        return this.http.delete(this.URL_API + `/${id}`);
    }

    updateDelivery(delivery: Delivery) {        
        return this.http.put(this.URL_API + `/${delivery.id}`, delivery);
    }
}
