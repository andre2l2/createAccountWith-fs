const express = require('express');
const create = express.Router();

const newUser = require('../newUser');

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

    return res.send('ok');
})

module.exports = create;