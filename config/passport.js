var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('User');

    passport.serializeUser(function(user,done){
        console.log("test1");
        done(null,user.id);
    })

    passport.deserializeUser(function(id,done){
        console.log("test2");
        User.findOne({_id:id}, '-password -salt', function(err,user){
            done(err,user);
        })
    })
    require('./strategies/local.js')();
}