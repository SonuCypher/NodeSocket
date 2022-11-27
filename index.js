const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

app.use(express.static("public"));

// app.get('/',(req,res)=>{
//     res.render('home')
// })

io.on("connection", (socket) => {
  console.log("made socket connection " + socket.id);

  socket.on('chat',(data)=>{
    io.sockets.emit('chat',data)
  })

  socket.on('typing',(data)=>{
    socket.broadcast.emit('typing', data)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected " + socket.id);
  });
});
server.listen(3000, () => {
  console.log("listening on : 3000");
});
