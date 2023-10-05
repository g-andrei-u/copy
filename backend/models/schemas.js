const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: {type:String},
    date: {type:String},
    content: {type:Array},
    imgPath: {type: String},
    imgContentType: {type: String},
    entryDate: { type:Date, default:Date.now }
});

const userSchema = new Schema({
    username: {type:String},
    password: {type:String}
});

const Articles = mongoose.model('Articles', articleSchema, 'articles');
const User = mongoose.model('User', userSchema, 'user');
const mySchemas = { 'Articles': Articles, 'User': User };


module.exports = mySchemas;