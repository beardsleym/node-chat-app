const path = require('path');
const http = require('http');
const express = require('express');

const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT 
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');
  
  socket.emit('newMessage', {
    from: 'mike',
    text: 'Hey what is going on',
    createdAt: 123
  });
  
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  })
  
  socket.on('disconnect', () => {
    console.log('User was disconnected')
  });
})

app.use(express.static(publicPath));

server.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!");
});