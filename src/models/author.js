const mongoose=require('mongoose');
const AuthorSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    authorId:{
        type:String,
        required:true,
        unique:true
    },
    Nationality:{
        type:String,
    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Books'
    }]
  
},{timestamps:true});
const Author=mongoose.model('Author',AuthorSchema);
module.exports=Author;