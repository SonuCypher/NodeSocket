const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app) 
const {Server} = require('socket.io')

const io = new Server(server)

app.set('views','./view')
app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render('home')
})


io.on('connection',(socket)=>{
    console.log('made socket connection')
})
server.listen(3000, ()=> {
    console.log('listening on : 3000')
})