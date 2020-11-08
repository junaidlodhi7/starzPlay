const express = require('express');
const controller = require('./controller');
const routes = express.Router();
routes.route('/').get(controller.pingMe)
module.exports = routes;