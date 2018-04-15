var jwt = require('jsonwebtoken'),
    config = require('../config'),
    User = require('../model/user');

var userLogin = (req, res, next) => {
    var email = req.body.email,
        password = req.body.password;

    User.findOne({email: email}, (err, user) => {
        if(err) {
            
        }
        else {
            User.comparePassword(password, user.password, (err, match) => {
                if(err) {
                    
                } else if(match) {
                    var token = jwt.sign(user, config.secret, {expiresIn: config.tokenexp});
                    return res.status(201).json({success: true, data: user, token: token });
                } else {
                    return res.status(404).json({
                        success: false,
                        message: 'password don\'t match'
                    })
                }
            });
        }
    });
}

var userAuthenticate = (req, res, next) => {
    var token = req.body.token || req.headers['authorization'];
    if(token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {

            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
}

var adminAuthenticate = (req, res, next) => {
    var token = req.body.token || req.headers['authorization'];
    if(token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {

            } else {
                var user = decoded._doc;
                if( user.isAdmin == true ) {
                    req.decoded = decoded;
                    next();
                } else {
                    return res.status(301).json({
                        success: false,
                        message: 'Invalid Admin Id'
                    });
                }
            }
        });
    }
}

module.exports = {
    userLogin,
    userAuthenticate,
    adminAuthenticate
}