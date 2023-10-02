const { default: mongoose } = require('mongoose');

require('mongoose');
const DB = 'mongodb+srv://shyam1112:shyam1112@cluster0.ucdrxth.mongodb.net/Auth?retryWrites=true&w=majority&appName=AtlasApp'

mongoose.connect(DB).then(()=>console.log('Database Connected')).catch((err)=>{
    console.log(err);
})