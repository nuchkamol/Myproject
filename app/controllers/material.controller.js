var Material = require('mongoose').model('Material');
const XLSX = require('xlsx');
const fs = require('fs');
var path = require('path');
var http = require('http');
var multer  = require('multer');
var alert = require('alert-node');

exports.imageprocess = function(req,res){
    var id =   req.session.dbid;
    if(id){
        console.log(id);
    }else{
        res.redirect('/login')
    }
};

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

exports.renderOverview = function(req,res){
    var id =   req.session.dbid;
    if(id){
   
        Material.find().distinct('nameobject',function(err,mat){  
            console.log(mat); 
            res.render('overview' , {
                    'title' : "ระบบจัดการครุภัณฑ์" ,
                    fullname:   req.session.fullname,
                    role: req.session.role,
                    messages:req.flash(err),
                    rows : mat
                });

        });
    }else{
        res.redirect('/login')
    }
};

exports.renderScan = function(req,res){
    var id =   req.session.dbid;
    if(id){
   
            res.render('scan' , {
                    'title' : "ระบบจัดการครุภัณฑ์" ,
                    fullname:   req.session.fullname,
                    role: req.session.role,
                    messages:req.flash('err')

                });
    }else{
        res.redirect('/login')
    }
};


exports.overview = function(req,res){
    var id =   req.session.dbid;
    if(id){
        var mate = new Material(req.body);
        console.log("start : " + mate.updateDate);
        console.log("end  :" + mate.createDate);
        Material.find().distinct('nameobject',function(err,mat){  
            Material.countDocuments({nameobject:mate.nameobject,updateDate: { '$gte': mate.updateDate, '$lte': mate.createDate },status:'จำหน่าย'},function(err,countSale){ 
                Material.countDocuments({nameobject:mate.nameobject,updateDate: { '$gte': mate.updateDate, '$lte': mate.createDate },status:'ปกติ'},function(err,countNormal){   
                    Material.countDocuments({nameobject:mate.nameobject,updateDate: { '$gte': mate.updateDate, '$lte': mate.createDate },status:'ยืม'},function(err,countBorrow){ 
                        console.log(countSale); 
                        console.log(countNormal); 
                        console.log(countBorrow); 
                res.render('overview' , {
                        'title' : "ระบบจัดการครุภัณฑ์" ,
                        fullname:   req.session.fullname,

                        role: req.session.role,
                        messages:req.flash(err),
                        rows : mat,
                        countSale : countSale,
                        countNormal : countNormal,
                        countBorrow : countBorrow,
                        objectname : req.body.nameobject
                    });

            });
                });
            });
        }); 
    }else{
        res.redirect('/login')
    }
};



exports.renderDetail = function(req,res){
    var id =   req.session.dbid;
  
    if(id){
    var o_id = req.params.id

    Material.findOne({_id:o_id},function(err,mat){   
        
    
        // console.log('id in render : ' + user._id);
        res.render('detail' , {
            title: 'ระบบจัดการครุภัณฑ์',
            messages:req.flash('error'),
            fullname:   req.session.fullname,
            imgbarcode : mat.imagebarcode.data,
            imgobject : mat.imageobject.data,
            txt_price:mat.price,
            txt_materialID : mat.materialid,
            txt_objectname : mat.nameobject,
            txt_personname : mat.nameuser,
            txt_datetime : mat.updateDate,
            txt_location : mat.location, 
            ddlStatus : mat.status,
            txt_detail : mat.detail,
            admin:req.session.username,
            ipClient:req.headers['x-forwarded-for'],
            ua:req.headers['user-agent'],
            id:mat._id,
            role: req.session.role 
            // salt:user.salt
        });
            
    });
    }else{
        res.redirect('/login')
    }
};
  
exports.editDetail = function(req,res){
    var id =   req.session.dbid;
    if(id){
    var mat = new Material(req.body);
  
    var myquery = { _id: mat._id };

    var d = new Date();
    var n = d.toISOString();

    var newvalues = { $set: {materialid: mat.materialid, nameobject: mat.nameobject , nameuser:req.session.fullname , price:mat.price , location:mat.location , status:mat.status , detail:mat.detail  , admin:req.session.username , updateDate:n.toString() , ip:mat.ip, ua:mat.ua } };
    Material.updateOne(myquery, newvalues, function(err, res) {
        if (err){
            alert('update ไม่สำเร็จ!! เนื่องจาก :' + err);
           
        }
        else{
            console.log("1 document updated");
            alert('update successfully!!');
           
        }
      });  res.redirect('/search');
    }else{
        res.redirect('/login');
    }
}

exports.deleteMat = function(req,res){
    var o_id = req.body.id;
    Material.remove({"_id": o_id}, function(err, result) {
        if (err) {
            req.flash('error', err)
            res.redirect('/search')
        } else {
            res.redirect('/search')
        }
    })    
}

exports.renderSearch = function(req,res){
    var id =   req.session.dbid;
    if(id){
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
    }else{
        res.redirect('/login')
    }
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



function decode(src) {
        QuaggaB.Quagga.decodeSingle(
                {
                inputStream: {
                    size: 640,
                    singleChannel: false
                },
                locator: {
                    patchSize: "large",
                    halfSample: false
                },
                decoder: {
                    readers: ["upc_reader", "code_128_reader", "code_39_reader", "code_39_vin_reader", "ean_8_reader", "ean_reader", "upc_e_reader", "codabar_reader"]
                },
                locate: true,
                src: src
                },
            function(result){
                if(result && result.codeResult && result.codeResult.code)
                {
                    return result.codeResult.code;
                  
                    //- $("#codeResult").text('Code - '+result.codeResult.code);
                }else{
                    return '';
                   
                    //- $("#codeResult").text("unable to read");
                }
                });
        }


exports.uploadBarcode = function(req,res){
    const Ifolder = './uploadB/';
    var allfile = req.files;
    if(allfile != null || allfile != ""){
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

            var textdecode = req.body.decodetext;
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + textdecode);
            var decode = textdecode.split('\n,');
            console.log(decode);
          for(var j in decode){ 
              var dec = decode[j].split('|');  
            var myquery = { materialid: dec[1].split('.')[0] };
                var newvalues = { $set: {textbarcode:dec[0]}};
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
        }
        );
           alert("upload successfully !!")
            res.redirect('/Search');
    }else{
        alert("กรุณาเลือก folder")
    }
 

}