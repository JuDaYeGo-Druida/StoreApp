const store = require('data-store')({ path: process.cwd() + '\\data\\products.json' });
const Product = require('../models/product');
const userCtrl = {};

userCtrl.getProduct = async (req, res) => {
    const product = store.get(req.params.id);
    res.json(product);
};

userCtrl.getProducts = async (req, res) => {
    const result = store.get();
    const products = [];
    var i;

    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        products.push(result[id]);
    }

    res.json(products);
};

userCtrl.addProduct = async (req, res) => {
    const product = new Product(req.body.reference, req.body.name, req.body.price);
    await store.set(product.id, {
        id: product.id,
        reference: product.reference,
        name: product.name,
        price: product.price
    });
    res.json({ 'status': 'Record saved' });
};

userCtrl.deleteProduct = async (req, res) => {
    store.del(req.params.id);
    res.json({ 'status': 'Record deleted' });
};

userCtrl.updateProduct = async (req, res) => {
    const product = new Product(req.body.reference, req.body.name, req.body.price);
    await store.set(req.body.id, {
        id: req.body.id,
        reference: product.reference,
        name: product.name,
        price: product.price
    });
    res.json({ 'status': 'Record updated' });
};

module.exports = userCtrl;