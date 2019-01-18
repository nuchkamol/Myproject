var multer = require('multer');
const uploadD = multer({ dest: './uploadD/' });
const uploadI = multer({ dest: './uploadI/' });
const uploadB = multer({ dest: './uploadB/' });
module.exports = function(app){
  
    var material = require('../controllers/material.controller');
  
    app.route('/upload')
        .get(material.renderUpload)
    
    app.get('/search' ,material.renderSearch)
    app.get('/', function (req, res) {
        res.send('ip'+req.headers['x-forwarded-for']);
    });
    app.get('/map' ,material.renderMap)
    app.post('/uploadData', uploadD.single('txtFileName') ,material.uploadData);
    app.post('/uploadImage', uploadI.any('txtFolderImage') ,material.uploadImage);
    app.post('/uploadBarcode', uploadB.any('txtFolderBarcode') ,material.uploadBarcode);
}