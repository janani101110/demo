const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        required:false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const blogPost =mongoose.model('blogPost',blogPostSchema);

module.exports=blogPost;