const fs = require('fs');

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const AddUser = (id, fname, lname, age, city) => {
    const users = loadUsers();
    const duplicateUser = users.find((user) => user.id === id);

    if (!duplicateUser) {
        users.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        });
        saveUsers(users);
        console.log('Adding a new user');

    } else {
        console.log('User already exists!');
    }
}


const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON);
}

const AddTen = () => {
    RemoveAll();
    for (let i = 1; i <= 10; i++) {
        AddUser(i, `nader${i}`, `Mamdouh${i}`, 20 + i, `Cairo${i}`);
    }
}

const RemoveUser = (id) => {
    const users = loadUsers();
    const usersToKeep = users.filter((user) => user.id !== id);

    if (users.length > usersToKeep.length) {
        console.log('User removed!');
        saveUsers(usersToKeep);
    } else {
        console.log('User not found!');
    }
}

const RemoveAll = () => {
    saveUsers([]);
    console.log('All users removed!');
}

const ReadUser = (id) => {
    const users = loadUsers();
    const user = users.find((user) => user.id === id);
    if (user) {
        console.log(user);
    } else {
        console.log('User not found!');
    }
}

const list = () => {
    const users = loadUsers();
    // check if users is empty
    if (users.length === 0) {
        console.log('No users found!');
    } else {
        console.log('Users list:');
        users.forEach((user) => {
            console.log(user.fname + ' ' + user.age + ' ' + user.city);
        });
    }
}


module.exports = {
    Add: AddUser,
    AddTen: AddTen,
    Remove: RemoveUser,
    RemoveAll: RemoveAll,
    Read: ReadUser,
    List: list
}