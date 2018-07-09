var express = require('express');
var config = require('./config');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
let path= require('path');


mongoose.connect(config.database,  (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('databse connected');
    }
});

app.use(express.static(path.join(__dirname, 'public')));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var productRoute = require('./routes/product');
app.use('/product', productRoute);

var userRoute = require('./routes/user');
app.use('/user', userRoute);

var authRoute = require('./routes/auth');
app.use('/auth', authRoute);

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(process.env.PORT || 8080, err => {
    if(err) {
        console.log('error in listening port: 3000');
    } else {
        console.log('app is running at port 3000');
    }
});