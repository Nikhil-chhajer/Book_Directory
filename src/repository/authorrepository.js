const {model}=require('mongoose');
const Author=require('../models/author');
class AuthorRepository{
    async createauthor(data){
        try {
            const author=await Author.create(data);
            return author;
        } catch (error) {
            console.log(error);
        }

    }
    async authorassiociationwithbooks(data){
        try {console.log(data);
            const author=await Author.findById(data);
             console.log(author);
            return author;
        } catch (error) {
            console.log(error);
        }

    }
}
module.exports=AuthorRepository;
