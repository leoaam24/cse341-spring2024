const express = require('express')
const app = express()
const lesson1Route = require('./controllers/lesson1');
const opendb = require('./database/connect');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3000;


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));


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
