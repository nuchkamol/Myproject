process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');


var db = mongoose();
var app = express();
var passport = passport();

// app.listen(3000);
app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});
module.exports = app;


console.log('Server running at http://localhost:3000');