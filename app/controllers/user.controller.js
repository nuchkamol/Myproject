var User = require('mongoose').model('User');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var users = require('../models/user.model');

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

exports.renderLogin = function(req,res){
     if(!req.user){
         res.render('index' , {
            'title' : "ระบบจัดการครุภัณฑ์" ,
             messages: req.flash('error') || req.flash('info')          
        });
     } else{
         return res.redirect('/search');
     }


}

  
exports.renderManageUser = function(req,res){
    User.find({},function(err,users){
        res.render('manageUser' , {
            title: 'ระบบจัดการครุภัณฑ์',
            messages:req.flash('error'),
            rows:users,
            fullname:  req.session.fullname,
            role: req.session.role 
        });
    })
};
        

exports.renderAddUser = function(req,res){
    res.render('addUser' , {
        title: 'ระบบจัดการครุภัณฑ์',
        messages:req.flash('error'),
        fullname:   req.session.fullname,
        role: req.session.role 
    });
};



exports.login = function(req,res){

    // passport.authenticate('local' ,{
    //     successRedirect: '/search',
    //     failureRedirect: '/login',
    //     failureFlash:true
    // })
    var user = new User(req.body);
    
        User.findOne({userName:req.body.username},function(err,user){
            if(!user){
                res.render('index' , {
                    'title' : "ระบบจัดการครุภัณฑ์" ,
                     messages: 'ไม่มี username นี้ในระบบ'
                });
            }else{
                if(req.body.username == user.userName){
                    process.nextTick(function() {
                    var passhash = users.authenticate(req.body.password, user.salt)
                        console.log(passhash);
                        if(passhash == user.passWord){
                                req.login(user,function(err){
                                    if(err){ 
                                        return next(err)
                                    }else{
                                        req.session.username = user.username;
                                        req.session.fullname = user.fullName;
                                        req.session.role = user.role;
                                        req.session.cookie.maxAge = 60*60*24*7;
                                        return res.redirect('/search');
                                    }
                                });
                        }else{
                            res.render('index' , {
                                messages: 'Invalid password'       
                            });
                        
                        }
                    });
                }else{
                    res.render('index' , {
                        messages: 'Invalid username'
                    });

                }
            }
        });
           
}


  


exports.addUser = function(req,res){
    if(!req.user){
        var user = new User(req.body);
        user.save(function(err){
            if(err){ 
                var messages = getErrorMessage(err);
                req.flash('error',messages);
                return res.redirect('/login');
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
    User.find({userName:req.body.username},function(err,users){
        if(err){
            console.log(err);
            return next(err);
        }else{
            console.log("test : " + res.json(users));
           return res.json(users);
        }
    })
};

exports.logout = function(req,res){
    req.logout();
    res.redirect('/login')
};