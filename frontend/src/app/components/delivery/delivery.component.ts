import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Delivery } from '../../models/delivery';
import { User } from '../../models/user';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.css'],
    providers: [DeliveryService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DeliveryComponent implements OnInit {

    modelfecha: Date;

    constructor(private deliveryService: DeliveryService, private userService: UserService, private modalService: ModalService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getUser();
        this.getDelivery();
    }

    getDelivery() {
        this.deliveryService.getDeliveries().subscribe(res => {            
            this.deliveryService.deliveries = res as Delivery[];
        });

        this.userService.selectedUser.rol = localStorage.getItem('rol');
    }

    editDelivery(delivery: Delivery, idModal: string) {
        console.log(delivery);
        this.modelfecha = new Date(delivery.dateestimated);
        this.deliveryService.selectedDelivery = delivery;
        this.modalService.open(idModal);
    }

    saveDelivery(form: NgForm, idModal: string) {
        console.log(form.value.id);
        if (form.value.id !== '') {
            this.deliveryService.updateDelivery(form.value).subscribe(res => {
                this.getDelivery();
                this.modalService.close(idModal);
            });
        } else {
            this.deliveryService.addDelivery(form.value).subscribe(res => {
                this.getDelivery();
                this.modalService.close(idModal);                
            });
        }
        this.resetForm(form);
        this.toastr.success("Product Saved.");
    }

    deleteDelivery(id: string) {
        if (confirm('Are you sure to delete the record?')) {
            this.deliveryService.deleteDelivery(id).subscribe(res => {
                this.getDelivery();
                this.toastr.success("Product Deleted.");
            });
        }
    }

    resetForm(form?: NgForm) {
        if (form) {
            form.reset();
            this.deliveryService.selectedDelivery = new Delivery();
        }
    }

    getUser() {
        this.userService.getUser().subscribe(res => {
            this.userService.users = res as User[];
        });        
    }

    openModal(idModal: string) {
        this.modalService.open(idModal);
    }

    closeModal(idModal: string) {        
        this.modalService.close(idModal);
    }
}
