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
    email: { type:String, unique:true},
    role: String,
    createDate: String,
    updateDate: String,
    admin: String,
    ip: String,
    ua: String
})





UserSchema.pre('save' , function(next,req, callback){

    console.log("ggggggg");
    if(this.passWord){
        
       // this.salt = new Buffer(crypto.ramdomBytes(16).toString('base64'),'base64');
       var str_salt = crypto.randomBytes(16).toString('base64');
        // var str_salt = crypto.randomBytes(64).toString('base64');
        this.salt = str_salt;
        this.passWord = this.hashPassword(this.passWord);
    }
    console.log("ggggggg2");
    var d = new Date();
    var n = d.toISOString();

    this.createDate = n.toString();
    this.updateDate = n.toString();

    // this.admin = req.session.fullname;

    // this.ip =" req.headers['x-forwarded-for']";
    // this.ua = "req.headers['user-agent']";
   
    next();
});
algorithm = 'aes-256-gcm',


UserSchema.methods.hashPassword =function(text){
    
    var cipher = crypto.createCipher('aes-256-cbc',this.salt)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
};



module.exports.authenticate = function(text, salt){
    console.log('เข้ามา');
    var cipher = crypto.createCipher('aes-256-cbc',salt)
    console.log('cipher'+ cipher);
    var crypted = cipher.update(text,'utf8','hex')
    console.log('crypted'+ crypted);
    crypted += cipher.final('hex');
    console.log('crypted'+ crypted);
    return crypted;
};

module.exports.decrypt = (encrypted, salt) => {
    console.log('เข้ามาkkkkkkkkkkkk');
    var decipher = crypto.createDecipher('aes-256-cbc',salt)
    console.log('decipher' + decipher);
    var dec = decipher.update(encrypted,'hex','utf8')
    console.log('dec' + dec);
    dec += decipher.final('utf8');
    console.log('dec' + dec);
    return dec;
}
mongoose.model('User' , UserSchema);
