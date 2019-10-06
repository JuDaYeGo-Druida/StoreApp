import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;
    message: string;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService, private userService: UserService, private toastr: ToastrService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userid: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = '';
        this.authService.logout();
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {

            this.userService.validUser(this.f.userid.value, this.f.password.value).subscribe(res => {

                if (JSON.stringify(res) !== JSON.stringify({})) {
                    let user = res as User;
                    console.log("Login successful " + user.rol);
                    localStorage.setItem('isLoggedIn', "true");
                    localStorage.setItem('token', this.f.userid.value);
                    localStorage.setItem('id', user.id);
                    localStorage.setItem('name', user.name);
                    localStorage.setItem('rol', user.rol);
                    window.location.href = this.returnUrl;                    
                } else {
                    this.toastr.error("Please check your username and password.")        
                }
            });           
        }
    }

}
