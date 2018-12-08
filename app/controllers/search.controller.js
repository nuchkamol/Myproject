exports.render = function(req,res){
    res.render('search' , {
        'title' : "ระบบจัดการครุภัณฑ์" ,
        username: req.user ? req.user.username : ''
    });
};