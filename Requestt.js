const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    userId: String,
    name:String,
    timee: String,
    reqee: Boolean
});

module.exports = mongoose.model('Request', RequestSchema);