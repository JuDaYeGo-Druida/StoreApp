const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');

router.get('/:id', product.getProduct);
router.get('/', product.getProducts);
router.post('/', product.addProduct);
router.delete('/:id', product.deleteProduct);
router.put('/:id', product.updateProduct);

module.exports = router;