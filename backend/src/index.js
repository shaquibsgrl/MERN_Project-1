const express=require("express");
require("dotenv").config()

const connect=require("./configs/db");

const userController=require("./controllers/product.controller")


const app=express();
//middleware
app.use(express.json())

app.use("/products",userController)

app.listen(process.env.PORT || 5000,async()=>{
    
    try {
       await connect();
    } catch (err) {
        console.log("err")
        
    }
    console.log("listenning on port 5000")

})