import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { WishlistService } from '../../services/wishlist.service';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product';
import { Wishlist } from '../../models/wishlist';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {

    constructor(private productService: ProductService, private userService: UserService, private wishlistService: WishlistService, private modalService: ModalService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct() {
        this.productService.getProduct().subscribe(res => {
            this.productService.products = res as Product[];            
        });

        this.userService.selectedUser.rol = localStorage.getItem('rol');        
    }

    editProduct(product: Product, idModal: string) {
        this.productService.selectedProducto = product;
        this.modalService.open(idModal);
    }

    saveProduct(form: NgForm, idModal: string) {
        if (form.value.id !== '') {
            this.productService.updateProduct(form.value).subscribe(res => {                             
                this.getProduct();
                this.modalService.close(idModal);
            });
        } else {
            this.productService.addProduct(form.value).subscribe(res => {                             
                this.getProduct();
                this.modalService.close(idModal);
                console.log('Record Inserted');
            });
        }        
        this.resetForm(form);
        this.toastr.success("Product Saved.");
    }

    deleteProducto(id: string) {
        if (confirm('Are you sure to delete the record?')) {
            this.productService.deleteProduct(id).subscribe(res => {                                
                this.toastr.success("Product Saved.");
            });
        }        
    }

    saveWhislist(productid: string) {
        let wishlist = new Wishlist();

        wishlist.userid = localStorage.getItem('id');
        wishlist.productid = productid;

        this.wishlistService.addWishlist(wishlist).subscribe(res => {
            this.getProduct();
            this.toastr.success("Product Save in Wishlist.");
        });
    }

    resetForm(form?: NgForm) {
        if (form) {
            form.reset();
            this.productService.selectedProducto = new Product();
        }
    }

    openModal(idModal: string) {
        this.modalService.open(idModal);
    }    

    closeModal(idModal: string) {
        this.modalService.close(idModal);
    }
}
