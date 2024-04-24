const express = require('express')
const app = express()
const lesson1Route = require('./controllers/lesson1');

app.get('/', lesson1Route.leoRoute);

app.get('/Alfred', lesson1Route.alfredRoute);

const port =  3000;

//ROUTES
app.use('/', require('./route'));


app.listen(process.env.port || port)
console.log('Web Server is listening at port ' + (process.env.port || port));