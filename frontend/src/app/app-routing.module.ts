import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserComponent },
    { path: 'account', component: AccountComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'deliveries', component: DeliveryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
