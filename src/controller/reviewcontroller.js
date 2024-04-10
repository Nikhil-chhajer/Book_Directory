const {ReviewService}=require('../services/index.js');
const reviewService=new ReviewService();
const create=async(req,res)=>{
    try {
        if(req.body.rating<=0 || req.body.rating >5){
            throw{
                message:"The Rating should be between 1 to 5"
            }
        }
        const bearerToken = req.headers.authorization;
        const review=await reviewService.create(req.body,bearerToken);
        return res.status(201).json({
            data :review,
            success:true,
            messgage:'Sucessfully created a review',
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a review',
            err:error
        })
    }

}
module.exports={
    create,
}