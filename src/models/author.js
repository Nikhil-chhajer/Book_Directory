const mongoose=require('mongoose');
const AuthorSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Nationality:{
        type:String,
    },
    
  
},{timestamps:true});
const Author=mongoose.model('Author',AuthorSchema);
module.exports=Author;