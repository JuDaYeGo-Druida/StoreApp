const store = require('data-store')({ path: process.cwd() + '\\data\\wishlist.json' });
const storeUser = require('data-store')({ path: process.cwd() + '\\data\\users.json' });
const storeProduct = require('data-store')({ path: process.cwd() + '\\data\\products.json' });
const Wishlist = require('../models/wishlist');
const wlCtrl = {};

wlCtrl.getWishlist = async (req, res) => {
    const result = store.get();
    const wishlists = [];
    var i;

    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];        
        if (req.params.id === result[id].userid) {            
            var user = storeUser.get(result[id].userid);
            var product = storeProduct.get(result[id].productid);

            wishlists.push({
                userid: result[id].userid,
                productid: result[id].productid,
                user: user,
                product: product
            });
        }
    }
    res.json(wishlists);
};

wlCtrl.getWishlists = async (req, res) => {
    const result = store.get();
    const wishlists = [];
    var i;

    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        var user = storeUser.get(result[id].userid);
        var product = storeProduct.get(result[id].productid);

        wishlists.push({
            userid: result[id].userid,
            productid: result[id].productid,
            user: user,
            product: product
        });
    }
    res.json(wishlists);
};

wlCtrl.addWishlist = async (req, res) => {
    const wishlist = new Wishlist(req.body.userid, req.body.productid);
    await store.set(wishlist.id, {
        userid: wishlist.userid,
        productid: wishlist.productid
    });
    res.json({ 'status': 'Record saved' });
};

wlCtrl.deleteWishlist = async (req, res) => {
    const result = store.get();
    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        if (req.params.userid === result[id].userid && req.params.productid === result[id].productid) {
            store.del(id);
        }
    }
    res.json({ 'status': 'Record deleted' });
};

module.exports = wlCtrl;