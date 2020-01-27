'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routeGet = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'API NodeJS',
        version: '0.0.1'
    });
});

const routePost = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const routePut = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

const routeDelete = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', routeGet);
app.use('/', routePost);
app.use('/', routePut);
app.use('/', routeDelete);

module.exports = app; 