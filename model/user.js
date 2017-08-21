var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    
    username : {type : String, required : true},
    userid : {type : String, required : true},
    userurl : {type : String, requried : true},



});

module.exports = mongoose.model('user',userSchema);