const mongoose = require('mongoose')

const ShoppostSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    description:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    
    imageUrl:{
        type:String
    },
    /*username: { 
        type:String,
        required:true
    }, 
    userid: { 
        type:String,
        required:true
    },*/
    
    
},{timestamps:true})

module.exports=mongoose.model("Shoppost",ShoppostSchema)