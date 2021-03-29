const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/:userId', function(req, res) {
    controller.listChats(req.query.userId)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'unexpected error', 500, e);
        });
});

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'internal error', 500, e)
        });
});

module.exports = router;