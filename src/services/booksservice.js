const {BookRepository}=require('../repository/index');
const {AuthorRepository}=require('../repository/index.js');

class BookService{
    constructor(){
        this.bookRepository=new BookRepository();
        this.authorRepository=new AuthorRepository();
    }
    async create(data){
        try {
            const author=await this.authorRepository.createauthor({Name:data.author});
            console.log(author)

            const book=await this.bookRepository.createbook({
                Title:data.Title,
                author:author._id,
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