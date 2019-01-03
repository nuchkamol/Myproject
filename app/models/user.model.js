var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: { type:String, unique:true , required: 'Username is required' , trim:true},
    passWord: String,
    salt:{type:String},
    fullName: { type:String, index:true},
    position: String,
    mobileNo: String,
    lineId: String,
    email: String,
    role: String,
    createDate: String,
    updateDate: String,
    admin: String,
    ip: String,
    ua: String
})





UserSchema.pre('save' , function(next,req, callback){

    
    if(this.passWord){
        
       // this.salt = new Buffer(crypto.ramdomBytes(16).toString('base64'),'base64');
       var str_salt = crypto.randomBytes(16).toString('base64');
        // var str_salt = crypto.randomBytes(64).toString('base64');
        this.salt = str_salt;
        this.passWord = this.hashPassword(this.passWord);
    }
   
    var d = new Date();
    var n = d.toISOString();

    this.createDate = n.toString();
    this.updateDate = n.toString();
    this.admin = "nuchn204";

    this.ip = "1.1.1.1";
    this.ua = "firefox";

   
    next();
});

UserSchema.methods.hashPassword =function(password){
    
    var hash =  crypto.pbkdf2Sync(password, new Buffer(this.salt,'binary'),10000,64,'sha1').toString('base64');
   
    return  hash;

    // return crypto.pbkdf2Sync(password,this.salt,10000,64).toString('base64');

};



module.exports.authenticate = function(password , salt){

    var hash =  crypto.pbkdf2Sync(password, new Buffer(salt,'binary'),10000,64,'sha1').toString('base64');
    return hash;
};
mongoose.model('User' , UserSchema);
