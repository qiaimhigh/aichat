const Koa = require('koa');
// 使用http服务
const { createServer } = require("http"); 
const { Server } = require('socket.io');

const app = new Koa();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection",(socket:any)=>{
  console.log(socket);
  console.log('connection ...');
})


httpServer.listen(3210);
