module.exports = function(app){
    var search = require('../controllers/search.controller');
    app.get('/search' ,search.render)
}