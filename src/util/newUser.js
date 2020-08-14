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

module.exports = {
    newUser,
    findUser
};