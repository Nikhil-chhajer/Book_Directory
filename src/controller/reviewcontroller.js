const {ReviewService}=require('../services/index.js');
const reviewService=new ReviewService();
const create=async(req,res)=>{
    try {
       
        const review=await reviewService.create(req.body);
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