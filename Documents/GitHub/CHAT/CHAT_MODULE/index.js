const { instrument } = require('@socket.io/admin-ui');
const { Server } = require('socket.io');

const io = new Server(4000, {
  cors: {
    origin: ['http://localhost:5173', 'https://admin.socket.io'],
    credentials: true,
  },
});


io.on("connection",client=>{

  client.on("send-message",mensagem =>{    
    const {text,room,id} = mensagem;
    if(room=="")
    io.emit("recive-message",mensagem);
    else
    io.to(room).emit("recive-message",mensagem);
    }
  );



})

instrument(io,{auth:false,mode: "development"});
