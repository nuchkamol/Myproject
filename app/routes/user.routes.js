var user = require('../controllers/user.controller');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app){

    // app.post('/', user.login);
    app.route('/login')
        .get(user.renderLogin)
        .post( user.login);
            
            // passport.authenticate('local', {  
            //     successRedirect: '/search',
            //     failureRedirect: '/login',
            //     failureFlash:true }));
        //     function(req, res) {
        //         res.redirect('/success?username='+req.user.username);
        //     }  );

    app.post('/search' , user.logout);
    app.route('/addUser')
        .get(user.renderAddUser)
        .post(user.addUser);

    app.route('/manageUser')
        .get(user.renderManageUser)
    app.route('/editUser/(:id)')
        .get(user.renderEditUser)
    app.route('/editUser')
        .post(user.editUser)
    app.route('/deleteUser')
        .post(user.deleteUser)
    app.route('/myAccount')
        .get(user.renderMyAccount)
 
        

   // app.route('/user')
    // .post(user.create)
    // .get(user.list);

    
  

}
