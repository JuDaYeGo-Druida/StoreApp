import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wishlist } from '../models/wishlist';

@Injectable({
    providedIn: 'root'
})
export class WishlistService {
    selectedWishlist: Wishlist;
    wishlists: Wishlist[];
    readonly URL_API = 'http://localhost:3000/api/wishlist';

    constructor(private http: HttpClient) {
        this.selectedWishlist = new Wishlist();
    }

    //Methods
    getWishlists() {
        return this.http.get(this.URL_API);
    }

    getWishlist(userid: string) {        
        return this.http.get(this.URL_API + `/${userid}`);
    }

    addWishlist(wishlist: Wishlist) {
        return this.http.post(this.URL_API, wishlist);
    }

    deleteWishlist(userid: string, productid: string) {
        return this.http.delete(this.URL_API + `/${userid}` + `/${productid}`  );
    }
}
