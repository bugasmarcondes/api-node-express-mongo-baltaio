'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta no mongodb
mongoose.connect('mongodb+srv://bugas:h7oBUS69@cluster0-0yxzg.azure.mongodb.net/test?retryWrites=true&w=majority');

// carrega os modelos
const Product = require('./models/product-model');

// carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; 