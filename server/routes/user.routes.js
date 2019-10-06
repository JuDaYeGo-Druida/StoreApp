const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.get('/:id', user.getUser);
router.get('/', user.getUsers);
router.get('/:username/:password', user.validUser);
router.post('/', user.addUser);
router.delete('/:id', user.deleteUser);
router.put('/:id', user.updateUser);

module.exports = router;