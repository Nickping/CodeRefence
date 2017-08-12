var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;
var bookSchema = new Schema({
    bookname : {type : String, required : true},
    booktype : {type : String, required: true},


});

module.exports = mongoose.model('book',bookSchema);