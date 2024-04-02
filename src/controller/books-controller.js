const {BookService}=require('../services/index.js');
const bookService=new BookService();
const create=async(req,res)=>{
    try {
        const book=await bookService.create(req.body);
        return res.status(201).json({
            data :book,
            success:true,
            messgage:'Sucessfully created a book',
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a book',
            err:error
        })
    }

}
module.exports={
    create
}
