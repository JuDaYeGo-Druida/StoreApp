import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers: [UserService]
})
export class AccountComponent implements OnInit {

    constructor(private userService: UserService, private modalService: ModalService, private toastr: ToastrService) { }

    ngOnInit() {
        
  }

}
