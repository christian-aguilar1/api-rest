const store = require('./store');
const chalk = require('chalk');
const {
    socket
} = require('../../socket');
const config = require('../../config');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error(chalk.red('[messageController] No user or message'));
            reject('The data is incorrect')
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = config.host + ':' + config.port + config.publicRoute + '/files/' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

async function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject('invalid data');
            return false;
        }
        const result = await store.updateText(id, message);

        resolve(result);
    })
}

async function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('invalid id');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}