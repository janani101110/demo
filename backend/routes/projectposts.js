const express = require('express')
const router = express.Router()
const Projectpost = require ('../models/Projectpost')

//create
router.post("/create",async(req,res) =>  {
    try{
        const newProjectpost = new Projectpost(req.body)
        const savedProjectpost = await newProjectpost.save()
        res.status(200).json(savedProjectpost)
    }
    catch(err){
        res.status(200).json(err)
    }
})

//GET post details(see more)
router.get("/:id",async(req,res) => {
    try{
        const projectpost = await Projectpost.findById(req.params.id)
        res.status(200).json(projectpost)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET posts
router.get("/",async(req,res) => {
    try{
        const projectposts = await Projectpost.find()
        res.status(200).json(projectposts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router