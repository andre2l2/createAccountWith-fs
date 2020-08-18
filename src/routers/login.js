const express = require('express');
const login = express.Router();

const newUser = require('../util/newUser');

login.get('/login', (req, res) => {
    return res.render('../../views/Login');
})

login.post('/login', async (req, res) => {
    const result = await newUser.findUser(req.body);

    if (result == true) {

        return res.render('../views/AllOk', { isOk: 'Correct' });
    }

    return res.render('../views/AllOk', { isOk: 'Error!' });
})

module.exports = login;