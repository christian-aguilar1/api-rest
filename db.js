const db = require('mongoose');
const chalk = require('chalk');

db.Promise = global.Promise;

async function connect(uri) {
    await db.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('[db] successfully connected'))
        .catch(err => console.error(chalk.red('[db]', err)));
}

module.exports = connect;