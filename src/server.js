const express = require('express');
const app = express();

const homePage = require('./routers/homePage');
const create = require('./routers/create');
const login = require('./routers/login');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));
app.use(express.json());

app.use(homePage);
app.use(create);
app.use(login);

app.listen(3333);