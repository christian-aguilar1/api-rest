const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('new client connected');
    socket.emit('message', 'Welcome!');
})

setInterval(function() {
    io.emit('message', 'Hello, I write to all of you');
}, 3000);

server.listen(8000, function() {
    console.log('Server started on http://localhost:8000');
});