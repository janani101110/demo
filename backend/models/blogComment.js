const mongoose = require('mongoose');
const blogCommentSchema = new mongoose.Schema({
    comment: {
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:String,
        required:true,
        unique:true,
    },
    blogPostId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    }
    })

module.exports=mongoose.model('blogComment',blogCommentSchema)