var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    materialid: { type:String, unique:true},
    imagebarcode:{ data: Buffer, contentType: String },
    textbarcode:String,
    nameobject: String,
    imageobject: { data: Buffer, contentType: String },
    nameuser: String,
    createDate: Date,
    updateDate: Date,
    price: String,
    location: String,
    status: String,
    detail: String,
    ip: String,
    ua: String,
    admin :String
})

UserSchema.pre('save' , function(next,req, callback){

    
   
    var d = new Date();
    var n = d.toISOString();

    this.createDate = d
    this.updateDate = d
    this.userId = req.session.dbid;

    this.ip = req.headers['x-forwarded-for'];
    this.ua = req.headers['user-agent'];

   
    next();
});

mongoose.model('Material' , UserSchema);