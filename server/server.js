'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/wishlist', require('./routes/wishlist.routes'));
app.use('/api/deliveries', require('./routes/delivery.routes'));

//Inicia el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});