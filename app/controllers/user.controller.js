var User = require('mongoose').model('User');
var users = require('../models/user.model');
var alert = require('alert-node');


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
        role: req.session.role,
        admin:req.session.username,
        ipClient:req.headers['x-forwarded-for'],
        ua:req.headers['user-agent']
    });
};

exports.renderEditUser = function(req,res){
    var o_id = req.params.id

    User.findOne({_id:o_id},function(err,user){   
        
        var passhash = users.decrypt(user.passWord, user.salt);
        console.log('id in render : ' + user._id);
        res.render('editUser' , {
            title: 'ระบบจัดการครุภัณฑ์',
            messages:req.flash('error'),
            fullname:   req.session.fullname,
            role: user.role ,
            txt_username : user.userName,
            txt_password : passhash,
            txt_fullname : user.fullName,
            txt_position : user.position,
            txt_mobile : user.mobileNo,
            txt_lineid : user.lineId,
            txt_email : user.email,
            _id : user._id,
            salt:user.salt
        });
            
    });

};

exports.renderMyAccount = function(req,res){
    var id =   req.session.dbid;
    if(id){
    console.log(' id' + id);
    User.findOne({_id:id},function(err,user){   
        
        var passhash = users.decrypt(user.passWord, user.salt);
        console.log('passhash : ' + passhash);
        res.render('myAccount' , {
            title: 'ระบบจัดการครุภัณฑ์',
            messages:req.flash('error'),
            fullname:   req.session.fullname,
            role: user.role ,
            txt_username : user.userName,
            txt_password : passhash,
            txt_fullname : user.fullName,
            txt_position : user.position,
            txt_mobile : user.mobileNo,
            txt_lineid : user.lineId,
            txt_email : user.email,
            _id : user._id,
            salt:user.salt
        });
            
    });
    }else{
        res.redirect('/login')
    }
};


exports.deleteUser = function(req,res){
    var o_id = req.body.id;
    User.remove({"_id": o_id}, function(err, result) {
        if (err) {
            req.flash('error', err)
            // redirect to users list page
            res.redirect('/manageUser')
        } else {
            res.redirect('/manageUser')
        }
    })    
}
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
                                        req.session.username = user.userName;
                                        req.session.fullname = user.fullName;
                                        req.session.dbid = user._id;
                                        console.log('session id' +  req.session.dbid);
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
    
        var user = new User(req.body);
        user.save(function(err){
            if(err){ 
                var messages = getErrorMessage(err);
                req.flash('error',messages);
                alert('ไม่สามารถ add user ได้ เนื่องจาก : ' + messages);
                return res.redirect('/manageUser');
            }else{
                // req.login(user,function(err){
                //     if(err) return next(err);
                    alert('Add User successfully! name ' + user.fullName);
                    return res.redirect('/manageUser');
                // });
             }
        });
    
}

exports.editUser = function(req,res){
    
    var user = new User(req.body);
    console.log('user._id ' +user._id );
    console.log('user.salt ' +user.salt );

    var myquery = { _id: user._id };
    var passhash = users.authenticate(user.passWord,user.salt);
    var d = new Date();
    var n = d.toISOString();
    console.log('user.id ' +user._id );
    console.log('myquery ' +myquery._id );
    // var srv = http.createServer(function (req, res) {
    //     var source = req.headers['user-agent'],
    //     ua = useragent.parse(source);
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end(JSON.stringify(ua));
     

    var newvalues = { $set: {userName: user.userName, passWord: passhash , role:user.role, fullName:user.fullName , position:user.position , mobileNo:user.mobileNo , lineId:user.lineId , email:user.email , admin:req.session.username , updateDate:n.toString() , ip:'1.1.2.2', ua:'chorme' } };
    User.updateOne(myquery, newvalues, function(err, res) {
        if (err){
            alert('update ไม่สำเร็จ!! เนื่องจาก :' + err);
           
        }
        else{
            console.log("1 document updated");
            alert('update successfully!!');
           
        }
      });  res.redirect('/manageUser');
   
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