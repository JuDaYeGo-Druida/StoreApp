import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

    constructor(private userService: UserService, private userServiceVal: UserService, private modalService: ModalService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getUser().subscribe(res => {
            this.userService.users = res as User[];
        });
        this.userServiceVal.selectedUser.rol = localStorage.getItem('rol');
    }

    editUser(user: User, idModal: string) {
        this.userService.selectedUser = user;
        this.modalService.open(idModal);
    }

    saveUser(form: NgForm, idModal: string) {
        console.log(form.value);        
        if (form.value.password == form.value.rpassword) {
            if (form.value.id !== '') {
                this.userService.updateUser(form.value).subscribe(res => {
                    this.getUser();
                    this.modalService.close(idModal);
                });
            } else {
                this.userService.addUser(form.value).subscribe(res => {
                    this.getUser();
                    this.modalService.close(idModal);
                });
            }
            this.resetForm(form);
            this.toastr.success("User Saved.");
        } else {
            this.toastr.error("Passwords do not match.")
        }
    }

    deleteUser(id: string) {
        if (confirm('Are you sure to delete the record?')) {
            this.userService.deleteUser(id).subscribe(res => {
                this.getUser();
                this.toastr.success("User deleted.");
            });
        }
    }

    resetForm(form?: NgForm) {
        if (form) {
            form.reset();
            this.userService.selectedUser = new User();
        }
    }

    openModal(idModal: string) {
        this.modalService.open(idModal);
    }

    closeModal(idModal: string) {
        this.modalService.close(idModal);        
    }
}
