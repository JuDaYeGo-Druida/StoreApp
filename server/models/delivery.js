const uuidv1 = require('uuid/v1');

function Delivery(userid, dateestimated, addressfrom, addresto, price, items) {
    this.id = uuidv1();
    this.userid = userid;
    this.dateestimated = dateestimated;
    this.addressfrom = addressfrom;
    this.addresto = addresto;
    this.price = price;
    this.items = items;
}

module.exports = Delivery;