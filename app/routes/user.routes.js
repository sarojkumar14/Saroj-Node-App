const express = require('express');
const router = express.Router();
const userQuery = require('../controllers/user.controller')

router.get('/getAllusers', function (req, res, next) {
    userQuery.getAllusers(function (err, response) {
        if (err) {
            return res.status('500').send({
                IsSuccess: false,
                Message: "Server error!",
                Data: null
            })
        }
        else {
            return res.send({
                IsSuccess: true,
                Message: "Users retrived successfully.",
                Data: response
            })
        }
    })
})

module.exports = router;