const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
    const filterUser = req.query.user || null;
    controller.getUsers(filterUser)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch(e => {
            response.error(req, res, 'unexpected error', 500, e);
        })
});

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'internal error', 500, err);
        });
})

router.patch('/:id', function(req, res) {
    controller.updateUser(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'internal error', 500, e);
        });
});

module.exports = router;