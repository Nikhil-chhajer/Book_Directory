const {ReviewRepository}=require('../repository/index');
const {BookRepository}=require('../repository/index');
const axios=require('axios');

class ReviewService{
    constructor(){
        this.reviewRepository=new ReviewRepository();
        this.bookRepository=new BookRepository();
    }
    async create(data){
        try {
        const books=await this.bookRepository.find(data.bookId);
        const users=await axios.get(`http://localhost:3001/api/v1/${data.userId}`);
           const review=await this.reviewRepository.createReview({
                  book:books._id,
                  user:users.data.data,
                  text:data.text
           });
        
        
           return review;
            

        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
   
}
module.exports=ReviewService;