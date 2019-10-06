const uuidv1 = require('uuid/v1');

function Producto(reference, name, price) {
    this.id = uuidv1();
    this.reference = reference; 
    this.name = name;
    this.price = price;
}

module.exports = Producto;