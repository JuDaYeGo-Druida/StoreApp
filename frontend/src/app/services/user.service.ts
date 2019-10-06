import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    selectedUser: User;
    users: User[];
    readonly URL_API = 'http://localhost:3000/api/users';

    constructor(private http: HttpClient) {
        this.selectedUser = new User();
    }

    //Methods
    getUser() {
        return this.http.get(this.URL_API);
    }

    validUser(username: string, password: string) {        
        return this.http.get(this.URL_API + `/${username}` + `/${password}`);
    }

    addUser(product: User) {
        return this.http.post(this.URL_API, product);
    }

    deleteUser(id: string) {
        return this.http.delete(this.URL_API + `/${id}`);
    }

    updateUser(product: User) {
        return this.http.put(this.URL_API + `/${product.id}`, product);
    }
}
