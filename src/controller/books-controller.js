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
const update=async (req,res)=>{
    try {
        const book=await bookService.bookupdation(req.body);
        return res.status(201).json({
            data :book,
            success:true,
            messgage:'Sucessfully updated a book',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update a book',
            err:error
        })
    }
    
}

const findbook=async (req,res)=>{
    try {
        const book=await bookService.findbook(req.body);
        return res.status(201).json({
            data :book,
            success:true,
            messgage:'Sucessfully find a book',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to find a book',
            err:error
        })
    }
    
}

const deletebook=async (req,res)=>{
    try {
        const book=await bookService.bookdelete(req.body);
        return res.status(201).json({
            data :book,
            success:true,
            messgage:'Sucessfully deleted a book',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete a book',
            err:error
        })
    }
    
}
const findAll=async(req,res)=>{
    try {
        const book=await bookService.findAllbook(req.body);
        return res.status(201).json({
            data :book,
            success:true,
            messgage:'Sucessfully got the books',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to find a book',
            err:error
        })
    }
}
module.exports={
    create,update,deletebook,findbook,findAll
}
