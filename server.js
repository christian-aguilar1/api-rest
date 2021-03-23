const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')

const router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(router);

router.get('/', function(req, res) {
    console.log(req.headers);
    if (req.body.error == "ok") {
        response.error(req, res, 'simulated error', 400)
    } else {
        response.success(req, res, 'message list');
    }
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
});

router.post('/message', function(req, res) {
    console.log(req.body);
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'unexpected error', 500, 'it\'s just a simulation of the errors')
    } else {
        response.success(req, res, 'correctly created', 201);
    }
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');