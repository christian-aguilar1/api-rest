const express = require('express');
const bodyParser = require('body-parser');

// connection to db
const db = require('./db')
    // ideally this url should be in an .env file
    // const uri = "mongodb+srv://db_userplatzimess:gokuvsleon@cluster0.tyt82.mongodb.net/platziapp_db?retryWrites=true&w=majority";
const uri = "mongodb+srv://db_userplatzimess:gokuvsleon@cluster0.tyt82.mongodb.net/platziapp_db"
db(uri);

// routes file
const router = require('./network/routes');

// start the express server
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// run the routes with the server
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('listen at http://localhost:3000');