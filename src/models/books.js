const mongoose=require('mongoose');

const BookSchema= new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    AuthorId:{
        type:String,
    },
    // Id:{
    //     type:String,
    //     required:true,
    // }
    

  },{timestamps:true});
  const Books=mongoose.model('Books',BookSchema);
  module.exports=Books;