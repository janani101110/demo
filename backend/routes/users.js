const express = require('express');
const router=express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const verifyToken=require('../verifyToken');
//const Comment=require('../models/Comment');
//const Post=require('../models/Post');

//Update
router.put("/:id",verifyToken, async (req, res) => {
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hashSync(req.body.password, salt);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
})



//Delete
router.delete("/:id",verifyToken, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        //delete all posts and comments of the user
       // await Post.deleteMany({username: req.params.id});
       // await Comment.deleteMany({username: req.params.id});
       res.status(200).json("User has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})





//Get User
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password, ...info} = user._doc;
        res.status(200).json(info);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports=router;