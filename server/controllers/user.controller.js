const store = require('data-store')({ path: process.cwd() + '\\data\\users.json' });
const User = require('../models/user');
const userCtrl = {};

userCtrl.getUser = async (req, res) => {
    const user = store.get(req.params.id);
    res.json(user);
};

userCtrl.getUsers = async (req, res) => {
    const result = store.get();
    const users = [];
    var i;

    for (i = 0; i < Object.keys(result).length; i++)
    {
        var id = Object.keys(result)[i];
        users.push(result[id]);
    }

    res.json(users);
};

userCtrl.validUser = async (req, res) => {
    const result = store.get();
    var i;

    for (i = 0; i < Object.keys(result).length; i++) {
        var id = Object.keys(result)[i];
        if (result[id].username === req.params.username && result[id].password === req.params.password)
            res.json(result[id]);
    }

    const user = {};
    res.json(user);
};

userCtrl.addUser = async (req, res) => {
    const user = new User(req.body.username, req.body.password, req.body.name, req.body.rol);
    await store.set(user.id, {
            id: user.id,
            username: user.username,
            password: user.password,
            name: user.name,
            rol: user.rol
        });    
    res.json({ 'status': 'Record saved' });
};

userCtrl.deleteUser = async (req, res) => {
    store.del(req.params.id);
    res.json({ 'status': 'Record deleted' });
};

userCtrl.updateUser = async (req, res) => {
    const user = new User(req.body.username, req.body.password, req.body.name, req.body.rol);
    await store.set(req.body.id, {
        id: req.body.id,
        username: user.username,
        password: user.password,
        name: user.name,
        rol: user.rol
    });
    res.json({ 'status': 'Record updated' });
};

module.exports = userCtrl;