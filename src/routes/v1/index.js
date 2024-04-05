const express = require('express');
const router=express.Router();
const bookcontroller=require('../../controller/books-controller.js');
router.post('/book',bookcontroller.create);
router.patch('/update',bookcontroller.update);
router.delete('/delete',bookcontroller.deletebook);
router.get('/id',bookcontroller.findbook);
module.exports=router;
