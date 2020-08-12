const express = require('express');
const app = express();

const newUser = require('./newUser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('../views');
});

app.get('/create', (req, res) => {
    res.render('../views/Create');
})

app.post('/create', (req, res) => {
    const { userName, email, password } = req.body;

    newUser.newUser(
        userName, 
        email, 
        password
    )

    res.send('ok');
})

app.get('/login', (req, res) => {
    res.render('../views/Login');
})

app.post('/login', (req, res) => {
    console.log(req.body);

    res.send('login');
})


app.listen(3333);