const express = require('express');
const router=express.Router();
const blogComment = require('../models/blogComment.js');
const User = require('../models/User.js');
const Post=require('../models/blogPost.js');
const bcrypt = require('bcrypt');
const verifyToken = require('../middleware/verifyToken.js');

//create new comment
router.post("/create" ,async (req, res) => {
    try{
        const newblogComment = new Post(req.body);
        const savedComment=await newblogComment.save();
        res.status(200).json(savedComment);
    }catch(err){
        res.status(500).json(err);
    }
})

//router to get all comments
router.get("/", async (req, res) => {
    try{
        const comments = await blogComment.find();
        res.status(200).json(blogComment);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;