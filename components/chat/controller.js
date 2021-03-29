const store = require('./store');
const chalk = require('chalk');

function addChat(users) {
    // return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }
    const chat = {
        users: users,
    };
    return store.add(chat);
    // });
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
    // updateMessage,
    // deleteMessage,
}