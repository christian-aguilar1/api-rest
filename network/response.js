const chalk = require('chalk');
const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = function(req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200
    }
    if (!message) {
        statusMessage = statusMessages[status]
    }
    res.status(status || 200).send({
        error: '',
        body: message,
    })
};

exports.error = function(req, res, message, status, details) {
    console.error(chalk.red(`[Response Error] ${details}`));
    res.status(statusCode).send({
        error: message,
        body: statusMessage,
    })
};