let getAllusers = function (callback) {
    callback(null, [{ "name": "saroj" }, { "name": "papu" }, { "name": "phili" }]);
};

module.exports = {
    getAllusers: getAllusers
};