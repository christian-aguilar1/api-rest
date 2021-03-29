const store = require('./store');

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function addUser(name) {
    if (!name) {
        return Promise.reject('invalid name');
    }

    const user = {
        name,
    };
    return store.add(user);
}

async function updateUser(id) {
    return new Promise(async(resolve, reject) => {
        console.log(id);
        if (!id) {
            reject('invalid data');
            return false;
        }
        const result = await store.updateUser(id);

        resolve(result);
    })
}

module.exports = {
    addUser,
    getUsers,
    updateUser
}