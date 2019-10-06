const uuidv1 = require('uuid/v1');

function Wishlist(userid, productid) {
    this.id = uuidv1();
    this.userid = userid;
    this.productid = productid;
}

module.exports = Wishlist;