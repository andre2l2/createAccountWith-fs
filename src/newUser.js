const fs = require('fs');

function newUser(userName, email, passwod) {
    const user = {
        userName: userName,
        email: email,
        passwod: passwod
    }

    const data = fs.readFileSync('./src/user.json', (err, data) => {
        return data;
    })
    
    const newUser = [...JSON.parse(data), user];
    
    fs.writeFileSync('./src/user.json', JSON.stringify(newUser, null, 2), 'utf-8');
}

function readUser() {
    const data = fs.readFileSync('./src/user.json', (err, data) => {
        return data;
    })
    return JSON.parse(data);
}

module.exports = {
    newUser,
    readUser
};