const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.leoRoute);
routes.get('/alfred', lesson1Controller.alfredRoute);

routes.use('/users', require('./users'));

module.exports = routes;