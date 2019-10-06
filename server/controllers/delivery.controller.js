const store = require('data-store')({ path: process.cwd() + '\\data\\delivery.json' });
const storeUser = require('data-store')({ path: process.cwd() + '\\data\\users.json' });
const Delivery = require('../models/delivery');
const deliveryCtrl = {};

deliveryCtrl.getDelivery = async (req, res) => {
    const delivery = store.get(req.params.id);
    res.json(delivery);
};

deliveryCtrl.getDeliveries = async (req, res) => {
    const result = store.get();
    const deliveries = [];
    var i;

    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        var user = storeUser.get(result[id].userid);

        deliveries.push({
            id: result[id].id,
            userid: result[id].userid,
            dateestimated: result[id].dateestimated,
            addressfrom: result[id].addressfrom,
            addresto: result[id].addresto,
            price: result[id].price,
            items: result[id].items,
            user: user
        });
    }
    res.json(deliveries);
};

deliveryCtrl.addDelivery = async (req, res) => {
    const delivery = new Delivery(req.body.userid, req.body.dateestimated, req.body.addressfrom, req.body.addresto, req.body.price, req.body.items);
    await store.set(delivery.id, {
        id: delivery.id,
        userid: delivery.userid,
        dateestimated: delivery.dateestimated,
        addressfrom: delivery.addressfrom,
        addresto: delivery.addresto,
        price: delivery.price,
        items: delivery.items
    });
    res.json({ 'status': 'Record saved' });
};

deliveryCtrl.deleteDelivery = async (req, res) => {
    store.del(req.params.id);
    res.json({ 'status': 'Record deleted' });
};

deliveryCtrl.updateDelivery = async (req, res) => {
    const delivery = new Delivery(req.body.userid, req.body.dateestimated, req.body.addressfrom, req.body.addresto, req.body.price, req.body.items);
    await store.set(req.params.id, {
        id: req.params.id,
        userid: delivery.userid,
        dateestimated: delivery.dateestimated,
        addressfrom: delivery.addressfrom,
        addresto: delivery.addresto,
        price: delivery.price,
        items: delivery.items
    });
    res.json({ 'status': 'Record updated' });
};

module.exports = deliveryCtrl;