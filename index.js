const express = require('express');
const connect=require('./src/config/databaseconfig.js')
const bodyParser=require('body-parser')
const {PORT}=require('./src/config/serverconfig')
const ApiRoutes = require('./src/routes/index.js');
const {BookService}=require('./src/services/index.js');
const {AuthorService}=require('./src/services/index.js');

const bookservice=new BookService();
const authorService=new AuthorService();
const setupAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    await connect();
   app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
    console.log("server started at PORT",PORT);
    })
   
    console.log("MongoDB connected");
}
setupAndStartServer();