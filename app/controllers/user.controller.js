let getAllusers = function (callback) {
    callback(null, [{
        "name": "saroj"
    }, {
        "name": "papu"
    }, {
        "name": "phili"
    }]);
};

var mongoose = require('mongoose');
//require('../models/user.model');
//var User = require('../models/user.model.js');
var User = mongoose.model('User');
let getUser = function (callback) {

    User.findOne({
    }, function (err, user) {
        if (err) {
            callback("error", null);
        } else {
            callback(null, user);
        }
    });
};

module.exports = {
    getAllusers: getAllusers,
    getUser: getUser
};