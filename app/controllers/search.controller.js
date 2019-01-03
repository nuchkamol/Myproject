exports.render = function(req,res){
    res.render('search' , {
        'title' : "ระบบจัดการครุภัณฑ์" ,
        fullname:   req.session.fullname,
        role: req.session.role 
    });
    
};