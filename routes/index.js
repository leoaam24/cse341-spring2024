const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.use('/', require('./swagger'));

routes.use('/users', require('./users'));

routes.get('/', lesson1Controller.leoRoute);
routes.get('/alfred', lesson1Controller.alfredRoute);



module.exports = routes;