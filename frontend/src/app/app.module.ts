import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        UserComponent,
        AccountComponent,
        WishlistComponent,
        LoginComponent,
        DeliveryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
