const {model}=require('mongoose');
const Review=require('../models/review');
class ReviewRepository{
async createReview(data){
    try {
        const review=await Review.create(data);
        return review;
    } catch (error) {
        console.log(error);
        console.log("Something went wrong in the Repository layer");
    }
}

}
module.exports=ReviewRepository;