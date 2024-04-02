const mongoose=require('mongoose');

const BookSchema= new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    Id:{
        type:String,
        required:true,
    }
    

  },{timestamps:true});
  const Books=mongoose.model('Books',BookSchema);
  module.exports=Books;