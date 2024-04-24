const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.leoRoute);
routes.get('/alfred', lesson1Controller.alfredRoute);

module.exports = routes;