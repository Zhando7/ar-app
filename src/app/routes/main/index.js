var express = require('express');
var api = express.Router();

api.get('/', function(req, res) {
    res.render('index')
});

module.exports = api;