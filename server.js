const express = require('express')
const app = express()
const lesson1Route = require('./controllers/lesson1');
const opendb = require('./database/connect');
const port =  process.env.PORT || 3000;


app.get('/', lesson1Route.leoRoute);

app.get('/alfred', lesson1Route.alfredRoute);

opendb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
});



//ROUTES
app.use('/', require('./routes/index.js'));
