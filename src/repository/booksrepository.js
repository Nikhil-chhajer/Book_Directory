const {model}=require('mongoose');
const Books=require('../models/books');
class BookRepository{
    async createbook(data){
        try {
            const book=await Books.create(data);
            return book;
        } catch (error) {
            console.log(error);
        }

    }
}
module.exports=BookRepository;
