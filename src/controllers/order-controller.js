'use strict';

//const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao processar sua requisição',
            message: e.message
        });
    }
};

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({ 
            title: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao processar sua requisição',
            message: e.message
        });
    }
};