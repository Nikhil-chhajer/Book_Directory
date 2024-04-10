const {ReviewRepository}=require('../repository/index');
const {BookRepository}=require('../repository/index');
const axios=require('axios');

class ReviewService{
    constructor(){
        this.reviewRepository=new ReviewRepository();
        this.bookRepository=new BookRepository();
    }
    async create(data,bearerToken){
        try {
        const books=await this.bookRepository.find(data.bookId);
        await books.populate('reviews');
        console.log(books);

        const users=await axios.get(`http://localhost:3001/api/v1/${data.userId}`);
           const review=await this.reviewRepository.createReview({
                  book:books._id,
                  user:users.data.data,
                  text:data.text,
                  rating:data.rating
           });
           const reviewCreationInUser = await axios.post(`http://localhost:3001/api/v1/reviewcreate`, {
            userId: data.userId,
            reviewId: review._id,},
            {
                headers: {
                    authorization: bearerToken
                }
        });

        
        await books.reviews.push(review);
        let totalRating = 0;
        for(let i=0;i<books.reviews.length;i++){
            console.log(books.reviews[i].rating);
            totalRating += books.reviews[i].rating;
        }      
        const averageRating = totalRating / books.reviews.length;

        books.averagerating=averageRating;
        await books.save();
           return review;
            

        } catch (error) {
            console.log("something wrong in the Service layer");
            throw { error };
        }

    }
   
}
module.exports=ReviewService;