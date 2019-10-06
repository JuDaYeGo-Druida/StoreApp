import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Wishlist } from '../../models/wishlist';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css'],
    providers: [WishlistService]
})
export class WishlistComponent implements OnInit {

    constructor(private wishlistService: WishlistService, private userService: UserService, private modalService: ModalService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getWhislist();
    }

    getWhislist() {
        let userid = localStorage.getItem('id');
        this.wishlistService.getWishlist(userid).subscribe(res => {
            console.log(res);
            this.wishlistService.wishlists = res as Wishlist[];
        });
    }

    deleteWhislist(productid: string) {
        if (confirm('Are you sure to delete the record?')) {
            this.wishlistService.deleteWishlist(localStorage.getItem('id'), productid).subscribe(res => {
                this.getWhislist();
                this.toastr.success("Product deleted of the Wishlist.");
            });
        }
    }
}
