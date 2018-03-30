var express = require('express');
var config = require('./config');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(config.database,  (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('databse connected');
    }
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var productRoute = require('./routes/product');
app.use('/product', productRoute);

var userRoute = require('./routes/user');
app.use('/user', userRoute);

var authRoute = require('./routes/auth');
app.use('/auth', authRoute);


app.listen(3000, err => {
    if(err) {
        console.log('error in listening port: 3000');
    } else {
        console.log('app is running at port 3000');
    }
});