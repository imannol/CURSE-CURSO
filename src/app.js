const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const userRoutes = require('./routes/users');


mongoose.connect('mongodb://localhost/curso', {
    useNewUrlParser: true
}).then(db => console.log('db is connected'))
.catch(err => console.log(err));


//settingns
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', userRoutes);

//static files

//error handlers

//start the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});