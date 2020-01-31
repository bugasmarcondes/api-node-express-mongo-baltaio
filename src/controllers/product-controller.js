'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

// versão assíncrona, porém NÃO aguarda resposta para devolução
// exports.get = (req, res, next) => {
//     repository
//         .get()
//         .then(data => {
//             res.status(200).send(data);
//         })
//         .catch(e => {
//             res.status(400).send(e);
//         });
// };

// versão assíncrona, porém AGUARDA resposta para devolução
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

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao processar sua requisição',
            message: e.message
        });
    }
};

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao processar sua requisição',
            message: e.message
        });
    }
};

exports.getByTag = async(req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao processar sua requisição',
            message: e.message
        });
    }
};

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'A slug deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({ 
            title: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao cadastrar o produto',
            message: e.message
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            title: 'Produto atualizado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao atualizar produto',
            message: e.message
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
        res.status(200).send({
            title: 'Produto removido com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            title: 'Falha ao remover produto',
            message: e.message
        });
    }
};