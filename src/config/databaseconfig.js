const mongoose=require('mongoose');
const connect=async()=>{
// Instead of using 'localhost', use '127.0.0.1'

mongoose.connect('mongodb://localhost:27017/Book_Directory');

}
module.exports=connect;