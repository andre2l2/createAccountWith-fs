const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.render('../views');
});


module.exports = routes;