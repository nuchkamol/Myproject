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
    createDate: Date,
    updateDate: Date,
    admin: String,
    ip: String,
    ua: String
})

mongoose.model('User' , UserSchema);

UserSchema.pre('save' , function(next){
    if(this.passWord){
        this.salt = new Buffer(crypto.ramdomBytes(16).toString('base64'), 'base64');
        this.passWord = this.hashPassword(this.passWord);
    }
   
    var d = new Date();
    var n = d.toISOString();
    this.createDate = n;
    this.updateDate = n;
    this.admin = "nuchn204";
    var yip2=java.net.InetAddress.getLocalHost();	
    var yip=yip2.getHostAddress();

    this.ip = yip;
    this.ua = navigator.userAgent;
    next();
});

UserSchema.method.hashPassword =function(password){
    return crypto.pbkdf2Sync(password,this.salt,10000,64).toString('base64');
}

UserSchema.method.authenticate = function(password){
    return this.passWord === this.hashPassword(password);
}

