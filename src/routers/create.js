const express = require('express');
const create = express.Router();

const newUser = require('../util/newUser');

create.get('/create', (req, res) => {
    return res.render('../views/Create');
})

create.post('/create', (req, res) => {
    const { userName, email, password } = req.body;

    newUser.newUser(
        userName, 
        email, 
        password
    )

    return res.render('../views/AllOk', { isOk: 'Create!' });
})

module.exports = create;