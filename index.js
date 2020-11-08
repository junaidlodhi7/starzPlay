const {
  port, env, socketUrl, socketPort,
} = require('./config');
const database = require('./database');
const server = require('./server');
const httpServer = require('http').createServer(server);
const socket = require('socket.io')(httpServer);


server.listen(process.env.PORT || port , () => {
  console.info(`Server started on port ${port} (${env})`);
});

const src = server;

module.exports = src;




