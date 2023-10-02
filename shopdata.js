const mongoose = require('mongoose');

const shopData=new mongoose.Schema({
    userId:String,
    shopname:String,
    owner:String,
    mobilenumber:String,
    address:String
})

module.exports = mongoose.model('shopdata',shopData);