/**
 * Arquivo src/routes/index.js
 * Descricao: Arquivo responsavel pela chamada da API 'Funcionario' da aplicação
 * Data: 28/03/2020
 */

 
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo a API tutorial MEAN',
        version: '1.0.0',
    });
});

module.exports = router;


