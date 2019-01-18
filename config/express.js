var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var config = require('./config');
const expressip = require('express-ip');
const PORT = process.env.PORT || 7000;
const path = require('path');

// const requestIp = require('request-ip');

module.exports = function(){
    var app = express();
 
    var ipc = "22.22.22.22";
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else{
        app.use(compression);
    }
    app.use(bodyParser.urlencoded({
        extended:true
    }))
    app.use(bodyParser.json());

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized:true
    }))
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(expressip().getIpInfoMiddleware);
    app.set("PORT", PORT);
    // app.use(multer({dest:'./upload/'}).single('singleInputFileName'));
    // app.use(requestIp.mw())
    // app.use(function(req, res) {
    //     const ip = req.clientIp;
    //   app.set(ipc ,);  
    // });
 
    app.set('trust proxy', true)
    app.set('views' , './app/views');
    app.set('view engine' , 'jade');

    // require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    // require('../app/routes/search.routes')(app);
    require('../app/routes/material.routes')(app);
    app.use(express.static('./public'));
  
    return app;

};

