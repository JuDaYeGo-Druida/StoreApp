import { Injectable } from '@angular/core';
import { ILogin } from '../interface/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    logout(): void {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');        
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('rol');
    }

}
