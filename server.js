const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('dotenv').config()

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
// connection to db
const db = require('./db');

db(config.dbUrl);

// routes file
const router = require('./network/routes');

app.use(cors());

// start the express server
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

socket.connect(server);

// run the routes with the server
router(app);

app.use(config.publicRoute, express.static('public'));

app.listen(config.port, function() {
    console.log('listen at ' + config.host + ':' + config.port);
});