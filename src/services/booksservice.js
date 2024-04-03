const {BookRepository}=require('../repository/index');
const {AuthorRepository}=require('../repository/index.js');

class BookService{
    constructor(){
        this.bookRepository=new BookRepository();
        this.authorRepository=new AuthorRepository();
    }
    async create(data){
        try {
            const validate=await this.authorRepository.authorassiociationwithbooks(data.authorId);
            if(validate){
                const book=await this.bookRepository.createbook({
                    Title:data.Title,
                    author:validate._id,
                    authorId:data.authorId
                });  
                await validate.books.push(book);
                await validate.save();
                return book;
            }
            const author=await this.authorRepository.createauthor({
                Name:data.author, 
                authorId:data.authorId
            });  
            const book=await this.bookRepository.createbook({
                Title:data.Title,
                author:author._id,
                authorId:data.authorId
            });  
            await author.books.push(book);
            await author.save();
            return book;


        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
}
module.exports=BookService;