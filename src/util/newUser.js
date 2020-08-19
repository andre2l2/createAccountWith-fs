const fs = require('fs');

function newUser(userName, email, passwod) {
    const user = {
        userName: userName,
        email: email,
        password: passwod
    }

    const data = fs.readFileSync('./src/user.json', (err, data) => {
        return data;
    })
    
    const newUser = [...JSON.parse(data), user];
    
    fs.writeFileSync('./src/user.json', JSON.stringify(newUser, null, 2), 'utf-8');
}

async function findUser(jsonUser) {
    const data = fs.readFileSync('./src/user.json', (err, data) => {
        if (err) {
            return '';
        }

        return data;
    })

    const parseData = JSON.parse(data);

    let result = false
    await parseData.forEach((value, index) => {
        if (( jsonUser.userName == value.userName ) && ( jsonUser.password == value.password )) {
            result = true;
        }
    })

    return result;
}

function checkUsers(userName = '', email = '') {
    const fs = require('fs');

    const users = fs.readFileSync('./user.json', (err, data) => {
        if (err) return undefined;

        return data;
    })

    const parseUsers = JSON.parse(users);

    return parseUsers.map((item) => {
        if (item.userName === userName || item.email === email) {
            return undefined;
        }
        else {
            return item;
        }
    })    
    
}
module.exports = {
    newUser,
    findUser
};