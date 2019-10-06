import { User } from './user';

export class Delivery {
    constructor(id = '', userid = '', dateestimated = new Date(), addressfrom = '', addresto = '', price = 0, items=0, user = new User() ) {
        this.id = id;
        this.userid = userid;
        this.dateestimated = dateestimated;
        this.addressfrom = addressfrom;
        this.addresto = addresto;
        this.price = price;
        this.items = items;
        this.user = user;
    }

    id: string;
    userid: string;
    dateestimated: Date;
    addressfrom: string;
    addresto: string;
    price: number;
    items: number;
    user: User;
}
