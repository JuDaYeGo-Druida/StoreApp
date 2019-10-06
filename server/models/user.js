const uuidv1 = require('uuid/v1');

function User(username, password, name, rol) {
    this.id = uuidv1();
    this.username = username;
    this.password = password;
    this.name = name;
    this.rol = rol;
}

module.exports = User;