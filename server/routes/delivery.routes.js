const express = require('express');
const router = express.Router();
const delivery = require('../controllers/delivery.controller');

router.get('/:id', delivery.getDelivery);
router.get('/', delivery.getDeliveries);
router.post('/', delivery.addDelivery);
router.delete('/:id', delivery.deleteDelivery);
router.put('/:id', delivery.updateDelivery);

module.exports = router;