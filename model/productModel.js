//db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema structure

let Product = new Schema({
    title : {type : String , required : true},
    image : {type : String, required : true},
    price : {type : String, required : true},
    category : {type : String, required : true},
    description : {type : String, required : true},
    created : {type : Date , default : Date.now}
}, {
    collection : 'collection1'
});

module.exports = mongoose.model('Product', Product);