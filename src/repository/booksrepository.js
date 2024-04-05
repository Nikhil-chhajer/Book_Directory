const {model}=require('mongoose');
const Books=require('../models/books');
const Author=require('../models/author');
class BookRepository{
    async createbook(data){
        try {
            const book=await Books.create(data);
            return book;
        } catch (error) {
            console.log(error);
        }

    }
    async updatebook(data){
        try {
            console.log(data);
            const book=await Books.findOne({
                bookId:data.bookId,
            });
            const { author, ...dataWithoutAuthor } = data;
            await book.updateOne(dataWithoutAuthor);
            return book;
        } catch (error) {
            console.log(error);       
        }
    }
    async find(data){
        try {
            const book=await Books.findOne({
                bookId:data.bookId,
            });
            return book;
        } catch (error) {
            console.log(error);   
        }

    }
    async delete(bookId,authorId){
       try {
        const book=await Books.findOne({
            bookId:bookId,
        });
        if(book){
        await book.deleteOne(book);
        const author=await Author.findOne({authorId:authorId});
        await author.books.pop(book);
        await author.save();
        }
        else{
            return  "book not present in DB";
        }
       } catch (error) {
        console.log(error);     
       }
     


    }
}
module.exports=BookRepository;
