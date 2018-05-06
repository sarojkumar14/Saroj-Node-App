var config = require('./config');
var	mongoose = require('mongoose');
var models=require('../app/models');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 0, socketTimeoutMS: 0 } } }
var db = mongoose.connect(config.databaseConfig.db, options);

module.exports = function () {
return db;
};
