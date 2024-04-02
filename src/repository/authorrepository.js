const {model}=require('mongoose');
const Author=require('../models/author');
class AuthorRepository{
    async createauthor(data){
        try {
            const book=await Author.create(data);
            return book;
        } catch (error) {
            console.log(error);
        }

    }
}
module.exports=AuthorRepository;
