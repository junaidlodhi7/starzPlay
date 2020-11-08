const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const routes = require('./api/v1/parking/routes');
const controller = require('./api/v1/parking/controller');
// parse body params and attache them to req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/media', routes);
module.exports = server;
