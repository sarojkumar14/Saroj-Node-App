process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV = process.env.NODE_ENV || 'product';
//process.env.NODE_ENV = process.env.NODE_ENV || 'qa';
//process.env.NODE_ENV = process.env.NODE_ENV || 'uat';

var config = require('./config/config');
var express = require('./config/express');

var app = express();

app.listen(config.serverConfig.port, () => {
    console.log(`Saroj node server app running at port ${config.serverConfig.port}`);
});