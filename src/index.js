const express=require("express");

const connect=require("./configs/db");

const userController=require("./controllers/product.controller")


const app=express();
//middleware
app.use(express.json())

app.use("/products",userController)

app.listen(5000,async()=>{
    
    try {
       await connect();
    } catch (err) {
        console.log("err")
        
    }
    console.log("listenning on port 5000")

})