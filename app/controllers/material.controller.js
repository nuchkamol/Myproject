var Material = require('mongoose').model('Material');
const XLSX = require('xlsx');
const fs = require('fs');
var path = require('path');
var http = require('http');
var multer  = require('multer');
var alert = require('alert-node');

exports.renderUpload = function(req,res){
    var id =   req.session.dbid;
    if(id){
    res.render('upload' , {
        'title' : "ระบบจัดการครุภัณฑ์" ,
        fullname:   req.session.fullname,
        role: req.session.role,
        messages:req.flash('error')
    }); 
    }else{
        res.redirect('/login')
    }
};

  
exports.renderSearch = function(req,res){
    var mysort = { location: -1 };
    Material.find({}).sort({createDate: -1}).exec(function(err, mat) { 
        console.log(mat);
        res.render('search' , {
            title: 'ระบบจัดการครุภัณฑ์',
            messages:req.flash('error'),
            rows:mat,
            fullname:  req.session.fullname,
            role: req.session.role 
        });
    })
    };

    exports.renderMap = function(req,res){
       
            res.render('map' , {
                title: 'ระบบจัดการครุภัณฑ์',
                messages:req.flash('error'),
                fullname:  req.session.fullname,
                role: req.session.role 
            });
        };
    
       

exports.uploadData = function(req,res){

    var filenameold =   req.file;
    console.log(filenameold.filename);

    fs.unlink('./uploadD/xxxx.xlsx',function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
    });  
   
  
    fs.rename('./uploadD/'+filenameold.filename, './uploadD/xxxx.xlsx', function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });

   
   const workbook = XLSX.readFile('./uploadD/xxxx.xlsx');
   const sheet_name_list = workbook.SheetNames;
//    console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));


  var docs = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  console.log(docs);
   Material.insertMany(docs, function(error, inserted) {
    if(error) {
        console.error(error);
    }
    else {
        console.log("Successfully inserted: " , inserted );
        for (var i in inserted) {
            val = inserted[i];
            console.log("id insert >>> " + val._id);
            var d = new Date();
            var n = d.toISOString();

            var myquery = { _id: val._id };
            var newvalues = { $set: {createDate: n.toString(), updateDate: n.toString() , ip:req.headers['x-forwarded-for'], ua:req.headers['user-agent'] , admin:req.session.username }};
            Material.updateOne(myquery, newvalues, function(err, res) {
                if (err){
                    console.log('update ไม่สำเร็จ!! เนื่องจาก :' + err);
                }
                else{
                    console.log("1 document updated");
                   
                }
              }); 
          }

    }
    alert("upload successfully !!")
    res.redirect('/Search');

});
}

exports.uploadImage = function(req,res){
    const Ifolder = './uploadI/';
    var allfile = req.files;
    for (var i in allfile) {
        console.log(allfile[i].filename);
        var data = fs.readFileSync(Ifolder+allfile[i].filename);

        var myquery = { materialid: allfile[i].originalname.split(".")[0] };
            var newvalues = { $set: {imageobject:{ data:data.toString('base64'),contentType:'jpg'}}};
            Material.updateOne(myquery, newvalues, function(err, res) {
                if (err){
                    console.log('update ไม่สำเร็จ!! เนื่องจาก :' + err);
                }
                else{
                    console.log("1 document updated");
                   
                }
              }); 
    }

    fs.readdir(Ifolder, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(Ifolder, file), err => {
            if (err) throw err;
          });
        }
      });

    alert("upload successfully !!")
    res.redirect('/Search');
   
  
}

exports.uploadBarcode = function(req,res){
    const Ifolder = './uploadB/';
    var allfile = req.files;
    for (var i in allfile) {
        console.log(allfile[i].filename);
        var data = fs.readFileSync(Ifolder+allfile[i].filename);

        var myquery = { materialid: allfile[i].originalname.split(".")[0] };
            var newvalues = { $set: {imagebarcode:{ data:data.toString('base64'),contentType:'jpg'}}};
            Material.updateOne(myquery, newvalues, function(err, res) {
                if (err){
                    console.log('update ไม่สำเร็จ!! เนื่องจาก :' + err);
                }
                else{
                    console.log("1 document updated");
                   
                }
              }); 
    }

    fs.readdir(Ifolder, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(Ifolder, file), err => {
            if (err) throw err;
          });
        }
      });

    alert("upload successfully !!")
    res.redirect('/Search');
   
  
}