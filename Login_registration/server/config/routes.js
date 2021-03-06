var mongoose = require('mongoose');
var users = require('./../controllers/users.js');

module.exports = function(app) {
    app.get('/users', users.index);
    app.post('/register', users.register);
    app.post('/login', users.login);
};
