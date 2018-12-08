var user = require('../controllers/user.controller');
module.exports = function(app){

    // app.post('/' , user.login);
    // app.route('/')
    //     .get(user.renderLogin)
    //     .post(user.authenticate('local' ,{
    //         successRedirect: '/search',
    //         failureRedirect: '/',
    //         failureFlash:true
    //     }))
    // app.post('/' , user.logout);
    app.route('/addUser')
        .get(user.renderAddUser)
        .post(user.addUser);
    // .post(user.create)
    // .get(user.list);
}