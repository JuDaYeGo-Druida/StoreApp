import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'frontend';    

    constructor(private userService: UserService, private router: Router, public authService: AuthService) { }

    ngOnInit() {
        this.validUser();        
    }

    validUser() {
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn);
        
        if (isLoggedIn === 'true') {
            this.userService.selectedUser.username = localStorage.getItem('token');
            this.userService.selectedUser.name = localStorage.getItem('name');
            this.userService.selectedUser.rol = localStorage.getItem('rol');
        } else {
            this.userService.selectedUser.username = "";
            this.userService.selectedUser.name = "";
            this.userService.selectedUser.rol = "";
        }
    }

    responseRedirect(url: string) {
        this.router.navigate([url]);
    }

    logout(): void {
        console.log("Logout");
        this.authService.logout();               
        window.location.href = "/login"
    }
}
