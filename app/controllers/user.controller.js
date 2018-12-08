var User = require('mongoose').model('User');
var passport = require('passport');

var getErrorMessage = function(err){
    var message = '';
    if(err.code){
            switch(err.code){
                case 11000:
                case 11001:
                    message = 'Username already exists';
                    break;
                default:
                    message = 'Something went wrong';
            }
    }else{
        for (var errName in err.errors){
            if(err.errors[errName].message){
                message = err.errors[errName].message;
            }
        }
    }
    return message;
}

exports.renderLogin = function(req , res){
    if(!req.user){
        res.render('index' , {
            title: 'Log in',
            messages: req.flash('error') || req.flash('info')
        });
    }else{
        return res.redirect('/search')
    }
}

exports.renderAddUser = function(req,res){
    res.render('addUser' , {
        title: 'Add User',
        messages:req.flash('error')
    });
};


exports.addUser = function(req,res){
    if(!req.user){
        var user = new User(req.body);
        user.save(function(err){
            if(err){ 
                var messages = getErrorMessage(err);
                req.flash('error',messages);
                return res.redirect('/');
            }else{
                req.login(user,function(err){
                    if(err) return next(err);
                    return res.redirect('/search');
                });
             }
        });
    }else{
        return res.redirect('/search');
    }
}

exports.create = function(req,res,next){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            return next(err);
        }  else{
            res.json(user);
        }
    });
};

exports.list = function(req,res,next){
    User.find({},function(err,users){
        if(err){
            return next(err);
        }else{
            res.json(users);
        }
    })
};