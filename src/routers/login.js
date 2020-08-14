const express = require('express');
const login = express.Router();

const newUser = require('../util/newUser');

login.get('/login', (req, res) => {
    return res.render('../../views/Login');
})

login.post('/login', async (req, res) => {
    const result = await newUser.findUser(req.body);

    if (result == true) {

        return res.send('password correct');
    }

    return res.send('password error');
})

module.exports = login;