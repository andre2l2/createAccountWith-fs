const express = require('express');
const app = express();

const newUser = require('./newUser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));
app.use(express.json());

app.get('/', (req, res) => {
    return res.render('../views');
});

app.get('/create', (req, res) => {
    return res.render('../views/Create');
})

app.post('/create', (req, res) => {
    const { userName, email, password } = req.body;

    newUser.newUser(
        userName, 
        email, 
        password
    )

    return res.send('ok');
})

app.get('/login', (req, res) => {
    return res.render('../views/Login');
})

app.post('/login', async (req, res) => {
    const result = await newUser.findUser(req.body);

    if (result == true) {

        return res.send('password correct');
    }

    return res.send('password error');
})


app.listen(3333);