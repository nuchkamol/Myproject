var user = require('../controllers/user.controller');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app){

    app.route('/login')
        .get(user.renderLogin)
        .post( user.login);

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
    app.route('/forgot')
        .get(user.renderForgot)
        .post(user.forgot);


}
