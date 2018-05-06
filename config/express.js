const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const config = require('./config');
const path = require('path');
var fs = require('fs')
var rfs = require('rotating-file-stream')

var logDirectory = path.join(__dirname, '../log')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});


let user = require('../app/routes/user.routes')

// use body parser so we can get info from POST and/or URL parameters
//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

// use morgan to log requests to the console
app.use(morgan('combined', {
    stream: accessLogStream
}))

app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS from client-side
app.use(cors());

//Unauthenticated routes
app.use('/api/user', user);

//JWT token generator
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});
//Authenticated routes

module.exports = function () {
    return app;
}