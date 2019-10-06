const express = require('express');
const router = express.Router();
const wishlist = require('../controllers/wishlist.controller');

router.get('/:id', wishlist.getWishlist);
router.get('/', wishlist.getWishlists);
router.post('/', wishlist.addWishlist);
router.delete('/:userid/:productid', wishlist.deleteWishlist);

module.exports = router;