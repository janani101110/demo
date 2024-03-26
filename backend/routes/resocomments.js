const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Post=require('../models/Post')
const ResoComment=require('../models/ResoComment')
const verifyToken = require('../verifyToken')

//create
router.post("/create", async (req,res)=>{
    try{
        const newComment=new ResoComment(req.body)
        const  savedComment=await newComment.save()
        res.status(200).json(savedComment)
    }
    catch(err){
        res.status(200).json(err)      

    }
})
//update
router.put("/:id",async (req,res)=>{
    try{

        const updatedComment=await ResoComment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//delete
router.delete("/:id",async (req,res)=>{
    try{
     await ResoComment.findByIdAndDelete(req.params.id)
    
     res.status(200).json("Comment has been deleted!")   
    }
    catch(err){
        res.status(500).json(err)
    }
})


//get post comments
router.get("/post/:postId",async (req,res)=>{
    try{
     const comments=await ResoComment.find({postId:req.params.postId})
     res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router