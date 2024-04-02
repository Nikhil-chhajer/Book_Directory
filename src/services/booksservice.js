const {BookRepository}=require('../repository/index');
const {AuthorRepository}=require('../repository/index.js');

class BookService{
    constructor(){
        this.bookRepository=new BookRepository();
        this.authorRepository=new AuthorRepository();
    }
    async create(data){
        try {
            let authorId=0;
            if(data.Author){
                const author = await this.authorRepository.createauthor({
                    Name:data.Author
                });
                authorId=author._id;
                console.log('Author created:',author);
            }
            const book=await this.bookRepository.createbook({Title:data.Title,Id:data.Id});
           
            book.Author=authorId;
            await book.save();            
            return book;

        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
}
module.exports=BookService;