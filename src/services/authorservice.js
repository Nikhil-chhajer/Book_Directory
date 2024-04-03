const {AuthorRepository,BookRepository}=require('../repository/index');
class AuthorService{
    constructor(){
        this.authorRepository=new AuthorRepository();
    }
    async create(data){
        try {
            const author=await this.authorRepository.createauthor(data);
            
            return author;

        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
    async findauthor(data){
        try {
            const author=await this.authorRepository.authorassiociationwithbooks(data);
            
            return author;

        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
}
module.exports=AuthorService;