const mongoose = require('mongoose');
const ResoCommentSchema = new mongoose.Schema({
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
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    })

module.exports=mongoose.model('ResoComment',ResoCommentSchema)