import { User } from './user';
import { Product } from './product';

export class Wishlist {
    constructor(userid = '', productid = '', user = new User(), product = new Product()) {
        this.userid = userid;
        this.productid = productid;
        this.user = user;
        this.product = product;
    }

    userid: string;
    productid: string;
    user: User;
    product: Product;
}
