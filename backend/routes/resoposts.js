const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const ResoComment = require('../models/ResoComment');
const ResoPost = require('../models/ResoPost'); // Import the ResoPost model
const verifyToken = require('../verifyToken');

// Create
router.post("/create", async (req, res) => {
    try {
        const newPost = new ResoPost(req.body); // Use ResoPost model instead of Post
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await ResoPost.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Delete
router.delete("/:id", async (req, res) => {
    try {
        await ResoPost.findByIdAndDelete(req.params.id); // Use ResoPost model instead of Post
        await ResoComment.deleteMany({postId:req.params.id})
        res.status(200).json("Post has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get Post Details
router.get("/:id", async (req, res) => {
    try {
        const post = await ResoPost.findById(req.params.id); // Use ResoPost model instead of Post
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get All Posts of a user
router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await ResoPost.find({ userId: req.params.userId }); // Use ResoPost model instead of Post
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get All Posts
router.get("/", async (req, res) => {
    const query=req.query
    try {
        const searchFilter={
            title:{$regex:query.search, $options: "i"}
        }
        const posts = await ResoPost.find(query.search?searchFilter:null); // Use ResoPost model instead of Post
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;
