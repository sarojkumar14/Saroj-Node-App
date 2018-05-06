process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV = process.env.NODE_ENV || 'product';
//process.env.NODE_ENV = process.env.NODE_ENV || 'qa';
//process.env.NODE_ENV = process.env.NODE_ENV || 'uat';

const config = require('./config/config');
const express = require('./config/express');

const app = express();

app.listen(config.serverConfig.port, () => {
    console.log(`Saroj node server app running at port ${config.serverConfig.port}`);
});