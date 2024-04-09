const express = require('express');
const router=express.Router();
const bookcontroller=require('../../controller/books-controller.js');
const reviewcontroller=require('../../controller/reviewcontroller.js')
router.post('/book',bookcontroller.create);
router.patch('/update',bookcontroller.update);
router.delete('/delete',bookcontroller.deletebook);
router.get('/:id',bookcontroller.findbook);
router.get('/search',bookcontroller.findAll);
router.post('/review',reviewcontroller.create);


module.exports=router;
