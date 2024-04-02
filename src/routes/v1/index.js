const express = require('express');
const router=express.Router();
const bookcontroller=require('../../controller/books-controller.js');
router.post('/book',bookcontroller.create);
module.exports=router;
